
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function InteractiveExploration() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Interactive Exploration</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Explore Different Aspects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Button asChild className="w-full">
                <Link to="/network/TP53">View Protein Network</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/variants/TP53">Explore Variants</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
