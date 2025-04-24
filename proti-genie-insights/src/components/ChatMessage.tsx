
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string | JSX.Element;
  sender: "user" | "bot";
  isTyping?: boolean;
  delay?: number;
}

export default function ChatMessage({ 
  content, 
  sender, 
  isTyping = false, 
  delay = 0 
}: ChatMessageProps) {
  const [isVisible, setIsVisible] = useState(delay === 0);
  const [typingContent, setTypingContent] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  // Text formatting for mentions
  const formatText = (text: string) => {
    if (typeof content !== 'string') return content;
    
    // Format protein/gene mentions
    const proteinRegex = /\b(TP53|BRCA1|EGFR|INS|p53)\b/g;
    
    // Format drug mentions
    const drugRegex = /\b(Doxorubicin|Nutlin-3|Olaparib|Rucaparib|Erlotinib|Cetuximab|Osimertinib|Metformin|Sulfonylureas)\b/g;
    
    // Format disease mentions
    const diseaseRegex = /\b(Li-Fraumeni syndrome|carcinomas|cancer|Hereditary Breast and Ovarian Cancer Syndrome|Triple-negative breast cancer|Non-small cell lung cancer|Glioblastoma|Colorectal cancer|Diabetes)\b/g;
    
    // Apply formatting
    return text
      .replace(proteinRegex, (match) => `<span class="protein-mention">${match}</span>`)
      .replace(drugRegex, (match) => `<span class="drug-mention">${match}</span>`)
      .replace(diseaseRegex, (match) => `<span class="disease-mention">${match}</span>`);
  };

  // Show message after delay
  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  // Typing animation effect
  useEffect(() => {
    if (isVisible && isTyping && typeof content === 'string') {
      let i = 0;
      const stringContent = content as string;
      const interval = setInterval(() => {
        if (i < stringContent.length) {
          setTypingContent(prev => prev + stringContent.charAt(i));
          i++;
        } else {
          clearInterval(interval);
          setIsTypingComplete(true);
        }
      }, 15); // Speed of typing
      
      return () => clearInterval(interval);
    }
  }, [isVisible, isTyping, content]);

  if (!isVisible) return null;

  return (
    <div className={cn(
      sender === "user" ? "user-message" : "bot-message",
    )}>
      {sender === "bot" && isTyping && !isTypingComplete ? (
        <>
          <div className="flex gap-1 mb-2">
            <span className="typing-indicator" style={{ animationDelay: "0ms" }}></span>
            <span className="typing-indicator" style={{ animationDelay: "300ms" }}></span>
            <span className="typing-indicator" style={{ animationDelay: "600ms" }}></span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: formatText(typingContent) }} />
        </>
      ) : (
        typeof content === 'string' 
          ? <div dangerouslySetInnerHTML={{ __html: formatText(content) }} />
          : content
      )}
    </div>
  );
}
