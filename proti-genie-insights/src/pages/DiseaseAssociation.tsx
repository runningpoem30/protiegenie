
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DiseaseAssociation() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Disease Associations</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Genetic Disease Links</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Li-Fraumeni Syndrome</h3>
                <p className="text-muted-foreground">Associated with TP53 mutations. Characterized by increased risk of multiple cancer types.</p>
              </li>
              <li className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Various Carcinomas</h3>
                <p className="text-muted-foreground">Multiple types of cancer linked to protein dysfunction, including breast, lung, and colorectal cancers.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
