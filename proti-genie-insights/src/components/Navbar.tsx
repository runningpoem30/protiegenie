
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">P</span>
            </div>
            <span className="font-bold text-xl">ProtiGenie</span>
          </Link>
        </div>
        <nav className="ml-auto flex items-center space-x-4">
          <Link 
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary"
            )}
          >
            About
          </Link>
          <Button asChild variant="default" size="sm">
            <Link to="/">
              Explore Proteins
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
