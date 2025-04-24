import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NetworkGraph from "@/components/NetworkGraph";
import Footer from "@/components/Footer";

type ProteinInteraction = {
  protein: string;
  description: string;
  strength: string;
};

type ProteinData = {
  id: string;
  name: string;
  description: string;
  function: string;
  structure: string;
  drugs: { name: string }[];
  diseases: { name: string }[];
  interactions: ProteinInteraction[];
};

export default function InteractionNetwork() {
  const { proteinId = "" } = useParams<{ proteinId: string }>();
  const [proteinData, setProteinData] = useState<ProteinData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!proteinId) return;

    const fetchProtein = async () => {
      try {
        const res = await fetch(`http://localhost:5050/api/proteins/network/${proteinId}`);
        if (!res.ok) throw new Error("Protein not found");
        const data = await res.json();
        setProteinData(data);
      } catch (error) {
        setProteinData(null);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProtein();
  }, [proteinId]);

  if (loading) {
    return (
      <div className="container max-w-5xl px-4 py-8">
        <p>Loading protein data...</p>
      </div>
    );
  }

  if (!proteinData) {
    return (
      <div className="container max-w-5xl px-4 py-8">
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Protein Not Found</h2>
            <p className="mb-4">We couldn't find information for '{proteinId}'.</p>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container max-w-5xl px-4 py-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Protein–Protein Interactions: {proteinData.id}</CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link to={`/explore/${proteinData.id}`}>← Back to Explorer</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <NetworkGraph 
                proteinId={proteinData.id} 
                interactions={proteinData.interactions} 
                className="mb-6"
              />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Network Overview</h3>
                  <p className="text-muted-foreground">
                    Visual representation of proteins interacting with {proteinData.id}. 
                    The network shows direct physical interactions based on experimental evidence (simulated).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Interaction Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {proteinData.interactions.map((interaction, index) => (
                      <Card key={index} className="border">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${getStrengthColor(interaction.strength)}`}></div>
                            <h4 className="font-semibold">{proteinData.id} ↔ {interaction.protein}</h4>
                          </div>
                          <p className="text-sm mt-2">{interaction.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm italic">
                    Note: This network visualization is a simplified representation. In a real biological context, 
                    protein interaction networks are much more complex and may involve hundreds of proteins with various 
                    interaction types and strengths.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function getStrengthColor(strength: string): string {
  switch (strength) {
    case "strong":
      return "bg-primary";
    case "medium":
      return "bg-secondary";
    case "weak":
      return "bg-muted-foreground";
    default:
      return "bg-muted-foreground";
  }
}
