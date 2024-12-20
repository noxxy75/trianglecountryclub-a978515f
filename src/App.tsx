import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Sports from "./pages/Sports";
import Blog from "./pages/Blog";
import BlogAdmin from "./pages/BlogAdmin";
import Contact from "./pages/Contact";
import FoodBeverage from "./pages/FoodBeverage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/food-beverage" element={<FoodBeverage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/admin" element={<BlogAdmin />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;