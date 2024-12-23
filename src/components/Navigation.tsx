import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('[data-menu-trigger="true"]')) {
      e.preventDefault();
    }
    setIsOpen(false);
  };

  const navigationLinks = (className = "") => (
    <div className={`flex flex-col items-center space-y-6 ${className}`}>
      <div className="w-full border-b pb-4 text-center">
        <span className="text-2xl font-semibold">Menu</span>
      </div>
      <Link 
        to="/" 
        className="w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={handleLinkClick}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={handleLinkClick}
      >
        About
      </Link>
      <Link 
        to="/sports" 
        className="w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={handleLinkClick}
      >
        Sports
      </Link>
      <Link 
        to="/food-beverage" 
        className="w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={handleLinkClick}
      >
        F&B
      </Link>
      <Link 
        to="/blog" 
        className="w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={handleLinkClick}
      >
        Blog
      </Link>
      <Link 
        to="/contact" 
        className="w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={handleLinkClick}
      >
        Contact
      </Link>
      {user ? (
        <>
          <Link 
            to="/blog/admin" 
            className="w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={handleLinkClick}
          >
            Blog Admin
          </Link>
          <Button 
            variant="destructive" 
            onClick={handleSignOut}
            className="w-full"
          >
            Sign Out
          </Button>
        </>
      ) : (
        <Link 
          to="/login" 
          className="w-full text-center"
          onClick={handleLinkClick}
        >
          <Button className="w-full">Sign In</Button>
        </Link>
      )}
    </div>
  );

  const desktopLinks = () => (
    <div className="hidden md:flex items-center space-x-8">
      <Link to="/" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
        Home
      </Link>
      <Link to="/about" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
        About
      </Link>
      <Link to="/sports" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
        Sports
      </Link>
      <Link to="/food-beverage" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
        F&B
      </Link>
      <Link to="/blog" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
        Blog
      </Link>
      <Link to="/contact" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
        Contact
      </Link>
      {user ? (
        <>
          <Link to="/blog/admin" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
            Blog Admin
          </Link>
          <Button 
            variant="destructive"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </>
      ) : (
        <Link to="/login">
          <Button>Sign In</Button>
        </Link>
      )}
    </div>
  );

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-purple-500/20 backdrop-blur-[2px] border-b border-gray-800/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/eb4ff50a-6f12-4589-847b-b1f563e9f9c2.png" alt="Triangle Country Club Logo" className="h-20 w-auto" />
          <span className="text-lg font-medium text-foreground">Triangle Country Club</span>
        </Link>
        
        {isMobile ? (
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" data-menu-trigger="true">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-8">
                {navigationLinks("pt-4")}
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          desktopLinks()
        )}
      </div>
    </nav>
  );
};

export default Navigation;