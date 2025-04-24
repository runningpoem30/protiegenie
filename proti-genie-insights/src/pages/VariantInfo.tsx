
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProtein } from "@/data/mockData";
import VariantList from "@/components/VariantList";
import Footer from "@/components/Footer";

export default function VariantInfo() {
  const { proteinId = "" } = useParams<{ proteinId: string }>();
  const proteinData = getProtein(proteinId);

  if (!proteinData) {
    return (
      <div className="container max-w-5xl px-4 py-8">
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Protein Not Found</h2>
            <p className="mb-4">We couldn't find variant information for '{proteinId}'.</p>
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
                <CardTitle>Known Variants of {proteinData.id}</CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link to={`/explore/${proteinData.id}`}>← Back to Explorer</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Variant Summary</h3>
                  <p className="text-muted-foreground">
                    {proteinData.id} has several documented genetic variants that can affect protein function
                    and are associated with various clinical outcomes.
                  </p>
                </div>
                
                <VariantList variants={proteinData.variants} />
                
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">About this data</h4>
                  <p className="text-sm">
                    These are examples of known genetic variants from dbSNP or ClinVar (simulated).
                    In a real application, this data would be sourced from public databases 
                    and literature, with links to primary sources and additional details.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Clinical Significance</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm">
                        Variants in {proteinData.id} can have profound effects on protein function
                        and may contribute to disease pathogenesis or treatment response.
                        Missense mutations often alter binding properties, while frameshift mutations
                        typically result in loss of function.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Population Frequency</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm">
                        Some variants shown here are rare and primarily found in disease contexts, 
                        while others may be common polymorphisms with variable frequencies across 
                        different populations. Population data would be sourced from gnomAD and 
                        1000 Genomes Project.
                      </p>
                    </CardContent>
                  </Card>
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
