
import { Variant } from "@/data/mockData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface VariantListProps {
  variants: Variant[];
  className?: string;
}

export default function VariantList({ variants, className }: VariantListProps) {
  return (
    <div className={className}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Variant ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
            <TableHead>Clinical Significance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {variants.map((variant) => (
            <TableRow key={variant.id}>
              <TableCell className="font-mono font-medium">{variant.id}</TableCell>
              <TableCell>
                <Badge variant={getVariantBadgeStyle(variant.type)}>
                  {variant.type}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">{variant.description}</TableCell>
              <TableCell>{variant.clinical}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function getVariantBadgeStyle(type: string): "default" | "destructive" | "outline" | "secondary" {
  switch (type.toLowerCase()) {
    case "missense":
      return "secondary";
    case "frameshift":
    case "nonsense":
      return "destructive";
    case "deletion":
      return "default";
    default:
      return "outline";
  }
}
