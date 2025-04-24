
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FunctionalInsights() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Functional Insights</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Biological Functions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Cell Cycle Regulation</h3>
                <p className="text-muted-foreground">Key role in regulating the cell cycle and preventing uncontrolled cell division.</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Apoptosis Control</h3>
                <p className="text-muted-foreground">Promotes programmed cell death when DNA damage is detected.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
