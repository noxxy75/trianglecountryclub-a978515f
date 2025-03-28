import { Card, CardContent } from "@/components/ui/card";

const MembershipInfo = () => {
  return (
    <div className="space-y-6">
      <Card className="border-none shadow-lg bg-background">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-left">Membership Benefits</h3>
          <ul className="space-y-2 text-muted-foreground text-left">
            <li>• Access to all sporting facilities</li>
            <li>• Professional coaching sessions</li>
            <li>• Member-only events and tournaments</li>
            <li>• Discounted equipment rentals</li>
            <li>• Access to the clubhouse</li>
            <li>• Priority booking for courts and facilities</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg bg-background">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-left">Membership Types</h3>
          <div className="space-y-4 text-left">
            <div>
              <h4 className="font-medium">Individual - $60/year</h4>
              <p className="text-sm text-muted-foreground">Perfect for single players</p>
            </div>
            <div>
              <h4 className="font-medium">Family - $75/year</h4>
              <p className="text-sm text-muted-foreground">Includes spouse and children under 18</p>
            </div>
            <div>
              <h4 className="font-medium">Corporate - $100/year</h4>
              <p className="text-sm text-muted-foreground">For businesses and their employees</p>
            </div>
            <div>
              <h4 className="font-medium">Student - $25/year</h4>
              <p className="text-sm text-muted-foreground">Discounted rate with valid student ID</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MembershipInfo;