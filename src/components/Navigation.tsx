import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/eb4ff50a-6f12-4589-847b-b1f563e9f9c2.png" alt="Triangle Country Club Logo" className="h-12 w-auto" />
          <span className="text-xl font-bold text-green-600">Triangle Country Club</span>
        </Link>
        <div className="hidden space-x-6 md:flex">
          <Link to="/" className="text-gray-600 hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-green-600">
            About
          </Link>
          <Link to="/sports" className="text-gray-600 hover:text-green-600">
            Sports
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-green-600">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-green-600">
            Contact
          </Link>
        </div>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link to="/contact">Join Now</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;