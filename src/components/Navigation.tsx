import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-purple-500/20 backdrop-blur-[2px] border-b border-gray-800/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/eb4ff50a-6f12-4589-847b-b1f563e9f9c2.png" alt="Triangle Country Club Logo" className="h-[100px] w-auto" />
          <span className="text-lg font-medium text-foreground">Triangle Country Club</span>
        </Link>
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
      </div>
    </nav>
  );
};

export default Navigation;