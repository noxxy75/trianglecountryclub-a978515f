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
              <ContactForm onSubmit={handleContactSubmit} />
              <div className="space-y-8">
                <ContactInfo />
                <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.3307673461647!2d31.646661776175437!3d-21.02699884334283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931b1a8b13fffff%3A0x7cc43521f9c6e0c6!2sRoss%20Armstrong%20Way%2C%20Triangle%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1709913031424!5m2!1sen!2szw"
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