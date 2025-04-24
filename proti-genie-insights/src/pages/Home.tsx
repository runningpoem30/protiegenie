import ProteinInput from "@/components/ProteinInput";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="container px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center">
          <div className="space-y-6 text-center max-w-3xl">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-3xl md:text-4xl">P</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              ProtiGenie – Your ChatGPT for Proteins
            </h1>
            <p className="text-xl text-muted-foreground md:px-10">
              Explore human proteins and genes with rich biological context.
            </p>
          
            <div className="w-full max-w-2xl mx-auto mt-10">
              <ProteinInput size="large" />
            </div>
          </div>
        </section>
        
        <section className="bg-muted py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Discover Biological Insights</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore different aspects of protein and gene analysis through our specialized tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Disease Associations</h3>
                  <p className="text-muted-foreground mb-4">Explore links between proteins and various diseases.</p>
                  <Button asChild className="w-full">
                    <Link to="/disease-association">View Associations</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Functional Insights</h3>
                  <p className="text-muted-foreground mb-4">Understand biological functions and cellular processes.</p>
                  <Button asChild className="w-full">
                    <Link to="/functional-insights">Explore Functions</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Interactive Exploration</h3>
                  <p className="text-muted-foreground mb-4">Dive deep into protein networks and variants.</p>
                  <Button asChild className="w-full">
                    <Link to="/interactive-exploration">Start Exploring</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
