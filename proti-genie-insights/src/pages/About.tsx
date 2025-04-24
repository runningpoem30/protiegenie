
import { Card, CardContent } from "../components/ui/card";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container max-w-4xl px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About ProtiGenie</h1>
            <p className="text-xl text-muted-foreground">
              Your AI companion for protein and gene exploration
            </p>
          </div>
          
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-6">
                ProtiGenie is a prototype for a smart AI assistant that helps researchers and students 
                explore biological insights about human proteins and genes. We aim to make complex 
                biological information accessible, intuitive, and contextually rich.
              </p>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-6xl">P</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">What Makes ProtiGenie Special</h3>
                      <p className="mb-4">
                        ProtiGenie combines the conversational nature of modern AI assistants with specialized 
                        knowledge of molecular biology. This allows users to quickly access and understand 
                        protein information without needing to navigate complex databases.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Conversational UI</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Specialized Knowledge</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Visual Representations</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Data Sources</h2>
              <p className="text-lg mb-6">
                In the current prototype, ProtiGenie uses simulated data that represents the kind of information 
                typically available from trusted biological databases. In a production version, we would 
                integrate with the following sources:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: "UniProt",
                    description: "Comprehensive protein sequence and functional information"
                  },
                  {
                    name: "AlphaFold",
                    description: "AI-predicted protein structures with high accuracy"
                  },
                  {
                    name: "DrugBank",
                    description: "Detailed drug data and drug-target interactions"
                  },
                  {
                    name: "PDB",
                    description: "Experimentally-determined 3D structures of proteins"
                  },
                  {
                    name: "ChEMBL",
                    description: "Bioactive molecules with drug-like properties"
                  },
                  {
                    name: "STRING",
                    description: "Protein-protein interaction networks and functional associations"
                  }
                ].map((source, i) => (
                  <Card key={i} className="border">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">{source.name}</h3>
                      <p className="text-sm text-muted-foreground">{source.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Future Development</h2>
              <div className="space-y-4">
                <p>
                  ProtiGenie is currently a prototype with simulated data and limited interactivity. 
                  Our roadmap includes:
                </p>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>Integration with real-time API calls to biological databases</li>
                  <li>Advanced natural language processing for true conversational exploration</li>
                  <li>Interactive 3D protein structure visualization</li>
                  <li>Expanded coverage of proteins, genes, pathways, and cellular processes</li>
                  <li>Citation tracking and literature references</li>
                  <li>Customization options for researchers with different needs</li>
                </ul>
                
                <div className="bg-muted p-4 rounded-lg mt-6">
                  <p className="text-center font-medium">
                    Built with love for the scientific community. 💙
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
