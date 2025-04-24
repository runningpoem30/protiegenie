import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import ChatMessage from "@/components/ChatMessage";
import ProteinInput from "@/components/ProteinInput";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

export default function ProteinExplorer() {
  const { proteinId = "" } = useParams<{ proteinId: string }>();
  const [messages, setMessages] = useState<{ content: string | JSX.Element; sender: "user" | "bot" }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [proteinData, setProteinData] = useState<any>(null);

  useEffect(() => {
    if (!proteinId) return;

    const fetchProtein = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/proteins/${proteinId}`);
        setProteinData(response.data);
      } catch (error) {
        console.error("Failed to fetch protein data:", error);
        setProteinData(null);
      }
    };

    fetchProtein();
  }, [proteinId]);

  // Generate the chat conversation
  useEffect(() => {
    if (!proteinId) return;
    
    const userMessage = `Tell me about ${proteinId}`;
    
    // Reset messages when protein changes
    setMessages([{ content: userMessage, sender: "user" }]);
    setIsTyping(true);
    
    // Add bot response after a delay
    const timer = setTimeout(() => {
      if (proteinData) {
        const initialResponses = [
          { content: `${proteinData.name} (${proteinData.id}) is a ${proteinData.description}`, sender: "bot" as const },
          { content: `Biological Function: ${proteinData.function}`, sender: "bot" as const },
        ];
        
        setMessages(prev => [...prev, ...initialResponses]);
        
        // Show 3D structure after delay
        setTimeout(() => {
          setMessages(prev => [...prev, {
            content: (
              <div>
                <p className="mb-2">**3D Structure**: Predicted structure from AlphaFold (mock)</p>
                <img 
                  src={proteinData.structure} 
                  alt={`${proteinData.id} structure`}
                  className="w-full max-w-md mx-auto rounded-lg border border-border"
                />
              </div>
            ),
            sender: "bot"
          }]);
          
          // Show drug associations
          setTimeout(() => {
            setMessages(prev => [...prev, {
              content: `Drug Associations: ${proteinData.drugs.map(d => d.name).join(", ")} (mock data from DrugBank)`,
              sender: "bot"
            }]);
            
            // Show disease links
            setTimeout(() => {
              setMessages(prev => [...prev, {
                content: `Disease Links: ${proteinData.diseases.map(d => d.name).join(", ")}`,
                sender: "bot"
              }]);
              
              // Show protein interactions
              setTimeout(() => {
                setMessages(prev => [...prev, {
                  content: (
                    <div>
                      <p className="mb-2">
                        **Protein–Protein Interactions**: {proteinData.id} interacts with {proteinData.interactions.slice(0, 3).map(i => i.protein).join(", ")}
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/network/${proteinData.id}`}>See full network →</Link>
                      </Button>
                    </div>
                  ),
                  sender: "bot"
                }]);
                
                // Show follow-up suggestion
                setTimeout(() => {
                  setMessages(prev => [...prev, {
                    content: (
                      <div>
                        <p className="mb-2">Would you like to know more about variants of {proteinData.id}?</p>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/variants/${proteinData.id}`}>Tell me about its variants →</Link>
                        </Button>
                      </div>
                    ),
                    sender: "bot"
                  }]);
                  setIsTyping(false);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      } else {
        setMessages(prev => [...prev, {
          content: `I'm sorry, I couldn't find any information about "${proteinId}". Please check the spelling or try a different protein/gene name.`,
          sender: "bot"
        }]);
        setIsTyping(false);
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, [proteinId, proteinData]);

  const handleNewProtein = (newProteinId: string) => {
    navigate(`/explore/${newProteinId}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    // Add user message
    const userMessage = inputValue;
    setMessages(prev => [...prev, { content: userMessage, sender: "user" }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = userMessage.toLowerCase();

      if (lowerInput.includes("function") || lowerInput.includes("what does it do")) {
        botResponse = `**More about ${proteinData?.id}'s function**: ${proteinData?.function}`;
      } else if (lowerInput.includes("structure") || lowerInput.includes("3d")) {
        botResponse = (
          <div>
            <p className="mb-2">**More about ${proteinData?.id}'s structure**: The predicted 3D structure shows {proteinData?.structure_details || "typical folding patterns for this protein class"}.</p>
            <img 
              src={proteinData?.structure} 
              alt={`${proteinData?.id} structure`}
              className="w-full max-w-md mx-auto rounded-lg border border-border"
            />
          </div>
        );
      } else if (lowerInput.includes("drug") || lowerInput.includes("compound")) {
        botResponse = `Drug interactions: ${proteinData?.drugs.map(d => `${d.name} (${d.type})`).join(", ")}`;
      } else if (lowerInput.includes("disease") || lowerInput.includes("disorder")) {
        botResponse = `Disease associations: ${proteinData?.diseases.map(d => `${d.name} (${d.evidence})`).join(", ")}`;
      } else {
        botResponse = `Hey there! Let me tell you about Hemoglobin subunit beta - one of the most important little proteins in your body! 🌟

First, the basics:

Official name: Hemoglobin subunit beta (but we can call it HBB for short!)
Its ID in protein databases: HBB_HUMAN
Part of the hemoglobin protein family (the oxygen taxi service in your blood! 🚖💨)
What it looks like:
Imagine a tiny, intricate knot made of 147 amino acids - that's HBB! It teams up with other hemoglobin subunits to form the complete hemoglobin protein that gives blood its red color.

Its super important job:
HBB is like an oxygen delivery specialist! It:
• Binds oxygen in your lungs 🫁
• Safely transports it through your bloodstream 💉
• Releases it exactly where your body needs it 🎯
(All while helping remove carbon dioxide too!)

Fun facts:

Every red blood cell contains about 280 million hemoglobin molecules!
HBB works with its partner Hemoglobin subunit alpha like a perfect dance duo 💃🕺
Small changes in HBB can cause conditions like sickle cell anemia, showing how important its exact structure is!`;
      }

      setMessages(prev => [...prev, { content: botResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container max-w-5xl px-4 py-8">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="chat">
                <div className="flex items-center justify-between mb-4">
                  <TabsList>
                    <TabsTrigger value="chat">Chat</TabsTrigger>
                    <TabsTrigger value="search">New Search</TabsTrigger>
                  </TabsList>
                  {proteinData && (
                    <div className="flex gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/network/${proteinData.id}`}>Interaction Network</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/variants/${proteinData.id}`}>Variants</Link>
                      </Button>
                    </div>
                  )}
                </div>
                
                <TabsContent value="chat" className="space-y-4 mt-4">
                  {proteinData ? (
                    <div className="bg-muted/30 rounded-lg py-4">
                      <div className="flex items-center space-x-2 px-4 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">P</span>
                        </div>
                        <div className="font-medium">ProtiGenie</div>
                      </div>
                      
                      <div className="space-y-1 px-4">
                        <h3 className="text-lg font-semibold">{proteinData.name} ({proteinData.id})</h3>
                        <p className="text-sm text-muted-foreground">
                          Interactive protein information session
                        </p>
                      </div>
                    </div>
                  ) : null}
                  
                  <div className="h-[60vh] overflow-y-auto p-4 border rounded-lg">
                    <div className="space-y-4">
                      {messages.map((message, index) => (
                        <ChatMessage
                          key={index}
                          content={message.content}
                          sender={message.sender}
                          isTyping={isTyping && index === messages.length - 1 && message.sender === "bot"}
                          delay={index > 1 ? 0 : 500} // Only delay the first couple of messages
                        />
                      ))}
                      {isTyping && messages.length === 1 && (
                        <ChatMessage 
                          content=""
                          sender="bot"
                          isTyping={true}
                        />
                      )}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <form onSubmit={handleSubmit} className="relative">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-full pr-24"
                        placeholder="Ask a follow-up question..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        disabled={isTyping}
                      />
                      <Button 
                        type="submit" 
                        className="absolute right-1 top-1" 
                        size="sm"
                        disabled={!inputValue.trim() || isTyping}
                      >
                        Send
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Try asking about function, structure, drugs, or diseases
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="search" className="mt-4 space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl font-bold mb-2">Search for a new protein or gene</h2>
                    <p className="text-muted-foreground mb-4">
                      Enter a protein or gene name to explore its biological information
                    </p>
                    <ProteinInput onSubmit={handleNewProtein} />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}