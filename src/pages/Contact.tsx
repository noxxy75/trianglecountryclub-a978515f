
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
    <div className="min-h-screen bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Tabs defaultValue={tabParam === 'membership' ? 'membership' : 'contact'} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-primary text-primary-foreground">
            <TabsTrigger value="contact" className="data-[state=active]:bg-white data-[state=active]:text-primary">Contact Us</TabsTrigger>
            <TabsTrigger value="membership" className="data-[state=active]:bg-white data-[state=active]:text-primary">Membership Application</TabsTrigger>
          </TabsList>

          <TabsContent value="contact">
            <h1 className="mb-12 text-center text-4xl font-bold text-foreground">Contact Us</h1>
            <div className="grid gap-8 lg:grid-cols-2">
              <ContactForm onSubmit={handleContactSubmit} />
              <div className="space-y-8">
                <ContactInfo />
                <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.316897569542!2d31.6468121!3d-21.0273687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931b1a8b1693d3f%3A0x46a18dda7d71b8a0!2sTriangle%20Country%20Club!5e0!3m2!1sen!2sus!4v1659913031424!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Triangle Country Club Location"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="membership" className="flex flex-col items-center text-center">
            <h1 className="mb-12 text-center text-4xl font-bold text-foreground">
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
