
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, Beer, Pizza, Utensils } from "lucide-react";
import { TabContent } from "@/components/food-beverage/TabContent";

const FoodBeverage = () => {
  return (
    <div 
      className="min-h-screen bg-secondary py-16" 
      style={{
        backgroundImage: "url('/lovable-uploads/baobab-background.png')", 
        backgroundSize: "contain", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "soft-light",
        backgroundAttachment: "fixed",
        opacity: 0.95 // Using opacity property instead of backgroundOpacity
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-foreground">Food & Beverage</h1>

        <Tabs defaultValue="menu" className="mx-auto max-w-5xl">
          <TabsList className="grid w-full grid-cols-4 bg-primary text-primary-foreground">
            <TabsTrigger 
              value="dining" 
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-primary"
            >
              <Pizza className="h-4 w-4" />
              Dining
            </TabsTrigger>
            <TabsTrigger 
              value="bar" 
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-primary"
            >
              <Beer className="h-4 w-4" />
              Bar & Lounge
            </TabsTrigger>
            <TabsTrigger 
              value="cafe" 
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-primary"
            >
              <Coffee className="h-4 w-4" />
              Café & Snacks
            </TabsTrigger>
            <TabsTrigger 
              value="menu" 
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-primary"
            >
              <Utensils className="h-4 w-4" />
              Menu
            </TabsTrigger>
          </TabsList>

          <TabContent category="dining" />
          <TabContent category="bar" />
          <TabContent category="cafe" />
          <TabContent category="menu" />
        </Tabs>
      </div>
    </div>
  );
};

export default FoodBeverage;
