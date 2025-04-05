
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FacilityCardProps {
  title: string;
  description: string;
  hours?: string;
  image?: string;
}

export const FacilityCard = ({ title, description, hours, image }: FacilityCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{description}</p>
        {hours && (
          <div className="rounded-md bg-muted p-4">
            <p className="text-sm font-medium text-card-foreground">Hours of Operation</p>
            <p className="whitespace-pre-line text-sm text-muted-foreground">{hours}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
