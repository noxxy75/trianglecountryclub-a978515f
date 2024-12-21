import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Settings } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MembershipForm from "@/components/contact/MembershipForm";
import MembershipInfo from "@/components/contact/MembershipInfo";

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
            <div className="flex items-center justify-center gap-2 mb-12">
              <Settings className="h-6 w-6 text-primary" />
              <h1 className="text-4xl font-bold text-sidebar-foreground">Contact Us</h1>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <ContactForm onSubmit={handleContactSubmit} />
              <ContactInfo />
            </div>
          </TabsContent>

          <TabsContent value="membership" className="flex flex-col items-center text-center">
            <h1 className="mb-12 text-center text-4xl font-bold text-sidebar-foreground">
              Membership Application
            </h1>
            <div className="grid gap-8 lg:grid-cols-2 w-full">
              <div className="w-full flex justify-center">
                <div className="w-full max-w-md">
                  <MembershipForm onSubmit={handleMembershipSubmit} />
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-md">
                  <MembershipInfo />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Contact;