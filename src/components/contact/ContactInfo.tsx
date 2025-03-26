import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <Card className="border-none shadow-lg bg-background">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <MapPin className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-muted-foreground">Triangle Country Club, XC9X+F2R, Triangle, Zimbabwe</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg bg-background">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground">+263 774 045 150</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg bg-background">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <div className="space-y-1">
                <p className="text-muted-foreground">Bookings: book@t-cc.net</p>
                <p className="text-muted-foreground">Reception: reception@t-cc.net</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
