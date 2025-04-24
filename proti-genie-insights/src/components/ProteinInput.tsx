
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { exampleQueries } from "@/data/mockData";

interface ProteinInputProps {
  size?: "default" | "large";
  initialValue?: string;
}

export default function ProteinInput({ size = "default", initialValue = "" }: ProteinInputProps) {
  const [proteinName, setProteinName] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();
    if (proteinName.trim()) {
      navigate(`/explore/${encodeURIComponent(proteinName.trim())}`);
    }
  };

  const handleExampleClick = (example: string) => {
    setProteinName(example);
    navigate(`/explore/${encodeURIComponent(example)}`);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-2">
          <Input 
            className={size === "large" ? "h-14 text-lg" : ""}
            placeholder="Enter a protein or gene name (e.g., BRCA1)"
            value={proteinName}
            onChange={(e) => setProteinName(e.target.value)}
          />
          <Button 
            type="submit" 
            className={size === "large" ? "h-14 px-8 text-lg" : ""}
          >
            Explore
          </Button>
        </div>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-sm text-muted-foreground">Examples:</span>
        {exampleQueries.map((example) => (
          <button
            key={example}
            onClick={() => handleExampleClick(example)}
            className="text-sm bg-secondary/10 hover:bg-secondary/20 text-secondary px-2 py-1 rounded-full transition-colors"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}
