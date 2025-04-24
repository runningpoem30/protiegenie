
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Interaction } from "@/data/mockData";

interface NetworkGraphProps {
  proteinId: string;
  interactions: Interaction[];
  className?: string;
}

export default function NetworkGraph({ proteinId, interactions, className }: NetworkGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Define nodes
    const nodes = [
      { id: proteinId, x: canvas.width / 2, y: canvas.height / 2, radius: 30, color: "#8B5CF6" },
      ...interactions.map((interaction, index) => {
        const angle = (index / interactions.length) * Math.PI * 2;
        const radius = Math.min(canvas.width, canvas.height) * 0.35; // Distance from center
        const x = canvas.width / 2 + Math.cos(angle) * radius;
        const y = canvas.height / 2 + Math.sin(angle) * radius;
        
        return {
          id: interaction.protein,
          x,
          y,
          radius: 20,
          color: getColorForStrength(interaction.strength)
        };
      })
    ];

    // Draw edges first (so they're behind nodes)
    nodes.slice(1).forEach(node => {
      drawEdge(ctx, nodes[0].x, nodes[0].y, node.x, node.y, "#9CA3AF");
    });

    // Draw nodes
    nodes.forEach(node => {
      drawNode(ctx, node.x, node.y, node.radius, node.color);
      drawLabel(ctx, node.id, node.x, node.y, node.id === proteinId ? "#8B5CF6" : "#1A1F2C");
    });

    // Add some network physics
    let animationId: number;
    
    const animate = () => {
      // Simple hover effect
      const hoverEffect = (timestamp: number) => {
        nodes.forEach((node, i) => {
          // Only animate non-center nodes
          if (i === 0) return;
          
          // Small floating movement
          const offset = Math.sin(timestamp / 1000 + i * 1.5) * 3;
          node.y += offset / 10;
          
          // Redraw
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Draw edges
          nodes.slice(1).forEach(n => {
            drawEdge(ctx, nodes[0].x, nodes[0].y, n.x, n.y, "#9CA3AF");
          });
          
          // Draw nodes
          nodes.forEach(n => {
            drawNode(ctx, n.x, n.y, n.radius, n.color);
            drawLabel(ctx, n.id, n.x, n.y, n.id === proteinId ? "#8B5CF6" : "#1A1F2C");
          });
        });
      };
      
      animationId = requestAnimationFrame(animate);
      hoverEffect(performance.now());
    };
    
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationId);
    };
  }, [proteinId, interactions]);

  // Helper functions
  function drawNode(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    
    // Add a subtle shadow effect
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 3;
    
    // Draw border
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Reset shadow
    ctx.shadowColor = 'transparent';
  }

  function drawEdge(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function drawLabel(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, color: string) {
    ctx.font = "14px Arial";
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y);
  }

  function getColorForStrength(strength: string): string {
    switch (strength) {
      case "strong": return "#8B5CF6"; // Primary
      case "medium": return "#0EA5E9"; // Secondary
      case "weak": return "#9CA3AF"; // Gray
      default: return "#9CA3AF";
    }
  }

  return (
    <div className={cn("relative aspect-video w-full border rounded-lg overflow-hidden", className)}>
      <canvas ref={canvasRef} className="w-full h-full bg-white/50"></canvas>
    </div>
  );
}
