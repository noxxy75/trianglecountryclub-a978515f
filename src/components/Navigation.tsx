import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = (className = "") => (
    <div className={`flex flex-col items-center space-y-6 ${className}`}>
      <div className="w-full border-b pb-4 text-center">
        <span className="text-xl font-semibold">Menu</span>
      </div>
      <Link 
        to="/" 
        className="w-full text-center text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="w-full text-center text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>
      <Link 
        to="/sports" 
        className="w-full text-center text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Sports
      </Link>
      <Link 
        to="/blog" 
        className="w-full text-center text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Blog
      </Link>
      <Link 
        to="/contact" 
        className="w-full text-center text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </Link>
      <div className="w-full pt-4 border-t">
        <Link to="/contact?tab=membership" className="block" onClick={() => setIsOpen(false)}>
          <Button variant="default" size="lg" className="w-full">
            Join Now
          </Button>
        </Link>
      </div>
    </div>
  );

  const desktopLinks = () => (
    <div className="hidden md:flex items-center space-x-8">
      <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Home
      </Link>
      <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        About
      </Link>
      <Link to="/sports" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Sports
      </Link>
      <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Blog
      </Link>
      <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Contact
      </Link>
      <Link to="/contact?tab=membership">
        <Button variant="default" size="sm">
          Join Now
        </Button>
      </Link>
    </div>
  );

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-purple-500/20 backdrop-blur-[2px] border-b border-gray-800/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/eb4ff50a-6f12-4589-847b-b1f563e9f9c2.png" alt="Triangle Country Club Logo" className="h-[100px] w-auto" />
          <span className="text-lg font-medium text-foreground">Triangle Country Club</span>
        </Link>
        
        {isMobile ? (
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
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