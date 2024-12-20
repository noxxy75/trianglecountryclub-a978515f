import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface MembershipFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

const membershipPrices = {
  individual: 299,
  family: 499,
  corporate: 999,
  student: 149
};

const MembershipForm = ({ onSubmit }: MembershipFormProps) => {
  const [selectedType, setSelectedType] = useState<string>("");
  const { toast } = useToast();

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    if (e.target.value) {
      toast({
        title: "Membership Selected",
        description: `${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)} membership added to cart - $${membershipPrices[e.target.value as keyof typeof membershipPrices]}/year`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType) {
      toast({
        title: "Error",
        description: "Please select a membership type",
        variant: "destructive",
      });
      return;
    }
    onSubmit(e);
  };

  return (
    <Card className="border-none shadow-lg bg-background">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
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
              value={selectedType}
              onChange={handleTypeChange}
            >
              <option value="">Select membership type</option>
              <option value="individual">Individual ($299/year)</option>
              <option value="family">Family ($499/year)</option>
              <option value="corporate">Corporate ($999/year)</option>
              <option value="student">Student ($149/year)</option>
            </select>
          </div>
          {selectedType && (
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Cart Summary</h4>
              <div className="flex justify-between items-center">
                <span>{selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Membership</span>
                <span className="font-semibold">${membershipPrices[selectedType as keyof typeof membershipPrices]}/year</span>
              </div>
            </div>
          )}
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