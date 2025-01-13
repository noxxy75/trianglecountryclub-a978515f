import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Beer, Pizza } from "lucide-react";

const FoodBeverage = () => {
  const menuItems = {
    dining: [
      {
        title: "Main Dining Room",
        description: "Experience fine dining with panoramic golf course views",
        hours: "Lunch: 11:30 AM - 2:30 PM\nDinner: 5:30 PM - 10:00 PM",
        image: "/lovable-uploads/eecd94d8-49bc-4c8a-8df2-9aa63f03f711.png"
      },
      {
        title: "Special Events",
        description: "Custom catering and private dining rooms available",
        hours: "By Reservation",
        image: "/lovable-uploads/a6394d68-0f20-4a6f-bca2-88f6ed2ed400.png"
      }
    ],
    bar: [
      {
        title: "19th Hole Bar",
        description: "Casual drinks and light fare with fellow members",
        hours: "11:00 AM - 11:00 PM",
        image: "/lovable-uploads/ef660ea6-2104-4ae6-b3a5-b4acf4a1a6f1.png"
      },
      {
        title: "Wine Cellar",
        description: "Extensive wine collection and tasting events",
        hours: "5:00 PM - 10:00 PM",
        image: "/lovable-uploads/f02ed9e7-1d08-4ddb-a8c4-6d9ad88fdaba.png"
      }
    ],
    cafe: [
      {
        title: "Poolside Café",
        description: "Quick bites and refreshments by the pool",
        hours: "9:00 AM - 6:00 PM (Seasonal)",
        image: "/lovable-uploads/eecd94d8-49bc-4c8a-8df2-9aa63f03f711.png"
      },
      {
        title: "Golf Course Snack Bar",
        description: "Convenient refreshments during your round",
        hours: "7:00 AM - Sunset",
        image: "/lovable-uploads/f02ed9e7-1d08-4ddb-a8c4-6d9ad88fdaba.png"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-foreground">Food & Beverage</h1>

        <Tabs defaultValue="dining" className="mx-auto max-w-5xl">
          <TabsList className="grid w-full grid-cols-3 bg-muted backdrop-blur-sm">
            <TabsTrigger value="dining" className="flex items-center gap-2 text-muted-foreground">
              <Pizza className="h-4 w-4" />
              Dining
            </TabsTrigger>
            <TabsTrigger value="bar" className="flex items-center gap-2 text-muted-foreground">
              <Beer className="h-4 w-4" />
              Bar & Lounge
            </TabsTrigger>
            <TabsTrigger value="cafe" className="flex items-center gap-2 text-muted-foreground">
              <Coffee className="h-4 w-4" />
              Café & Snacks
            </TabsTrigger>
          </TabsList>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {items.map((item, index) => (
                  <Card key={index} className="overflow-hidden bg-card border-border">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-card-foreground">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground">{item.description}</p>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-medium text-card-foreground">Hours of Operation</p>
                        <p className="whitespace-pre-line text-sm text-muted-foreground">{item.hours}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default FoodBeverage;