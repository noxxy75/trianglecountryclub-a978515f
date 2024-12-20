import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/eb4ff50a-6f12-4589-847b-b1f563e9f9c2.png" alt="Triangle Country Club Logo" className="h-[50px] w-auto" />
          <span className="text-lg font-medium text-gray-900">Triangle Country Club</span>
        </Link>
        <div className="hidden space-x-8 md:flex">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link to="/sports" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Sports
          </Link>
          <Link to="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </div>
        <Button asChild className="bg-gray-900 hover:bg-gray-800 text-sm font-medium">
          <Link to="/contact">Join Now</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;