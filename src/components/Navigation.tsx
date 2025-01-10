import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);

      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
        
        setIsAdmin(profile?.role === 'admin');
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      
      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
        
        setIsAdmin(profile?.role === 'admin');
      } else {
        setIsAdmin(false);
      }
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

  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navigationLinks = (className = "") => (
    <div className={`flex flex-col items-center space-y-6 ${className}`}>
      <div className="w-full border-b pb-4 text-center">
        <span className="text-2xl font-semibold">Menu</span>
      </div>
      <Link 
        to="/" 
        className={cn(
          "w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/') && "text-foreground font-semibold border-b-2 border-primary"
        )}
        onClick={handleLinkClick}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={cn(
          "w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/about') && "text-foreground font-semibold border-b-2 border-primary"
        )}
        onClick={handleLinkClick}
      >
        About
      </Link>
      <Link 
        to="/sports" 
        className={cn(
          "w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/sports') && "text-foreground font-semibold border-b-2 border-primary"
        )}
        onClick={handleLinkClick}
      >
        Sports
      </Link>
      <Link 
        to="/food-beverage" 
        className={cn(
          "w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/food-beverage') && "text-foreground font-semibold border-b-2 border-primary"
        )}
        onClick={handleLinkClick}
      >
        F&B
      </Link>
      <Link 
        to="/blog" 
        className={cn(
          "w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/blog') && "text-foreground font-semibold border-b-2 border-primary"
        )}
        onClick={handleLinkClick}
      >
        Blog
      </Link>
      <Link 
        to="/contact" 
        className={cn(
          "w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/contact') && "text-foreground font-semibold border-b-2 border-primary"
        )}
        onClick={handleLinkClick}
      >
        Contact
      </Link>
      {user ? (
        <>
          {isAdmin && (
            <>
              <Link 
                to="/blog/admin" 
                className={cn(
                  "w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors",
                  isActiveRoute('/blog/admin') && "text-foreground font-semibold border-b-2 border-primary"
                )}
                onClick={handleLinkClick}
              >
                Blog Admin
              </Link>
              <Link 
                to="/admin" 
                className={cn(
                  "w-full text-center text-xl font-medium text-muted-foreground hover:text-foreground transition-colors",
                  isActiveRoute('/admin') && "text-foreground font-semibold border-b-2 border-primary"
                )}
                onClick={handleLinkClick}
              >
                Admin Panel
              </Link>
            </>
          )}
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
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-10 h-10"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );

  const desktopLinks = () => (
    <div className="hidden md:flex items-center space-x-8">
      <Link 
        to="/" 
        className={cn(
          "text-lg font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/') && "text-foreground font-semibold border-b-2 border-primary"
        )}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={cn(
          "text-lg font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/about') && "text-foreground font-semibold border-b-2 border-primary"
        )}
      >
        About
      </Link>
      <Link 
        to="/sports" 
        className={cn(
          "text-lg font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/sports') && "text-foreground font-semibold border-b-2 border-primary"
        )}
      >
        Sports
      </Link>
      <Link 
        to="/food-beverage" 
        className={cn(
          "text-lg font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/food-beverage') && "text-foreground font-semibold border-b-2 border-primary"
        )}
      >
        F&B
      </Link>
      <Link 
        to="/blog" 
        className={cn(
          "text-lg font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/blog') && "text-foreground font-semibold border-b-2 border-primary"
        )}
      >
        Blog
      </Link>
      <Link 
        to="/contact" 
        className={cn(
          "text-lg font-medium text-muted-foreground hover:text-foreground transition-colors",
          isActiveRoute('/contact') && "text-foreground font-semibold border-b-2 border-primary"
        )}
      >
        Contact
      </Link>
      {user ? (
        <>
          {isAdmin && (
            <>
              <Link 
                to="/blog/admin" 
                className={cn(
                  "text-lg font-medium text-muted-foreground hover:text-foreground transition-colors",
                  isActiveRoute('/blog/admin') && "text-foreground font-semibold border-b-2 border-primary"
                )}
              >
                Blog Admin
              </Link>
              <Link 
                to="/admin" 
                className={cn(
                  "text-lg font-medium text-muted-foreground hover:text-foreground transition-colors",
                  isActiveRoute('/admin') && "text-foreground font-semibold border-b-2 border-primary"
                )}
              >
                Admin Panel
              </Link>
            </>
          )}
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
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-10 h-10"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-purple-500/20 backdrop-blur-[2px] border-b border-gray-800/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/eb4ff50a-6f12-4589-847b-b1f563e9f9c2.png" alt="Triangle Country Club Logo" className="h-12 w-auto" />
          <span className="text-base font-medium text-foreground">Triangle Country Club</span>
        </Link>
        
        {isMobile ? (
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm" data-menu-trigger="true">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-6">
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
