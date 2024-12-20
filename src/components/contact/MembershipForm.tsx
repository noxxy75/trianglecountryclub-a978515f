import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface MembershipFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

const MembershipForm = ({ onSubmit }: MembershipFormProps) => {
  return (
    <Card className="border-none shadow-lg bg-background">
      <CardContent className="p-6">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="memberEmail">Email</Label>
            <Input id="memberEmail" type="email" placeholder="Your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Your phone number" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="membershipType">Membership Type</Label>
            <select 
              id="membershipType" 
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            >
              <option value="">Select membership type</option>
              <option value="individual">Individual</option>
              <option value="family">Family</option>
              <option value="corporate">Corporate</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="interests">Areas of Interest</Label>
            <Textarea
              id="interests"
              placeholder="Tell us about your sporting interests"
              className="min-h-[100px]"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm">
              I agree to the club's terms and conditions
            </Label>
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MembershipForm;