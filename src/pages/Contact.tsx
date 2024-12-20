import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const handleMembershipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Membership application submitted",
      description: "We'll review your application and contact you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-sidebar py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Tabs defaultValue={tabParam === 'membership' ? 'membership' : 'contact'} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="membership">Membership Application</TabsTrigger>
          </TabsList>

          <TabsContent value="contact">
            <h1 className="mb-12 text-center text-4xl font-bold text-sidebar-foreground">Contact Us</h1>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Card className="border-none shadow-lg bg-background">
                  <CardContent className="p-6">
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Message subject" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Your message"
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-none shadow-lg bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">Ross Armstrong Way, Triangle, Zimbabwe</p>
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
            </div>
          </TabsContent>

          <TabsContent value="membership">
            <h1 className="mb-12 text-center text-4xl font-bold text-sidebar-foreground">
              Membership Application
            </h1>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Card className="border-none shadow-lg bg-background">
                  <CardContent className="p-6">
                    <form onSubmit={handleMembershipSubmit} className="space-y-6">
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
              </div>

              <div className="space-y-6">
                <Card className="border-none shadow-lg bg-background">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Membership Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground">
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
                    <h3 className="text-xl font-semibold mb-4">Membership Types</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Individual</h4>
                        <p className="text-sm text-muted-foreground">Perfect for single players</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Family</h4>
                        <p className="text-sm text-muted-foreground">Includes spouse and children under 18</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Corporate</h4>
                        <p className="text-sm text-muted-foreground">For businesses and their employees</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Student</h4>
                        <p className="text-sm text-muted-foreground">Discounted rate with valid student ID</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Contact;
