import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Loader2 } from "lucide-react";

interface MembershipFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

const membershipPrices = {
  individual: 60,
  family: 75,
  corporate: 100,
  student: 25
};

const MembershipForm = ({ onSubmit }: MembershipFormProps) => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType) {
      toast({
        title: "Error",
        description: "Please select a membership type",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Payment Successful",
        description: "Your membership application has been processed successfully.",
      });
      onSubmit(e);
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-none shadow-lg bg-background">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Your full name" required className="text-center" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="memberEmail">Email</Label>
            <Input id="memberEmail" type="email" placeholder="Your email" required className="text-center" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Your phone number" required className="text-center" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="membershipType">Membership Type</Label>
            <select 
              id="membershipType" 
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-center"
              required
              value={selectedType}
              onChange={handleTypeChange}
            >
              <option value="">Select membership type</option>
              <option value="individual">Individual ($60/year)</option>
              <option value="family">Family ($75/year)</option>
              <option value="corporate">Corporate ($100/year)</option>
              <option value="student">Student ($25/year)</option>
            </select>
          </div>
          {selectedType && (
            <div className="bg-muted p-4 rounded-lg space-y-4">
              <h4 className="font-medium">Cart Summary</h4>
              <div className="flex justify-between items-center">
                <span>{selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Membership</span>
                <span className="font-semibold">${membershipPrices[selectedType as keyof typeof membershipPrices]}/year</span>
              </div>
              <div className="border-t border-border pt-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">${membershipPrices[selectedType as keyof typeof membershipPrices]}/year</span>
                </div>
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="interests">Areas of Interest</Label>
            <Textarea
              id="interests"
              placeholder="Tell us about your sporting interests"
              className="min-h-[100px] text-center"
              required
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the club's terms and conditions
              </Label>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting || !selectedType}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing Payment...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Checkout - ${selectedType ? membershipPrices[selectedType as keyof typeof membershipPrices] : '0'}/year
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default MembershipForm;