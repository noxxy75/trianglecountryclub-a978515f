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
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
      },
      {
        title: "Special Events",
        description: "Custom catering and private dining rooms available",
        hours: "By Reservation",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
      }
    ],
    bar: [
      {
        title: "19th Hole Bar",
        description: "Casual drinks and light fare with fellow members",
        hours: "11:00 AM - 11:00 PM",
        image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20"
      },
      {
        title: "Wine Cellar",
        description: "Extensive wine collection and tasting events",
        hours: "5:00 PM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
      }
    ],
    cafe: [
      {
        title: "Poolside Café",
        description: "Quick bites and refreshments by the pool",
        hours: "9:00 AM - 6:00 PM (Seasonal)",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
      },
      {
        title: "Golf Course Snack Bar",
        description: "Convenient refreshments during your round",
        hours: "7:00 AM - Sunset",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">Food & Beverage</h1>

        <Tabs defaultValue="dining" className="mx-auto max-w-5xl">
          <TabsList className="grid w-full grid-cols-3 bg-purple-500/20 backdrop-blur-sm">
            <TabsTrigger value="dining" className="flex items-center gap-2 text-white">
              <Pizza className="h-4 w-4" />
              Dining
            </TabsTrigger>
            <TabsTrigger value="bar" className="flex items-center gap-2 text-white">
              <Beer className="h-4 w-4" />
              Bar & Lounge
            </TabsTrigger>
            <TabsTrigger value="cafe" className="flex items-center gap-2 text-white">
              <Coffee className="h-4 w-4" />
              Café & Snacks
            </TabsTrigger>
          </TabsList>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {items.map((item, index) => (
                  <Card key={index} className="overflow-hidden bg-[#222222] border-gray-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-gray-300">{item.description}</p>
                      <div className="rounded-md bg-[#333333] p-4">
                        <p className="text-sm font-medium text-white">Hours of Operation</p>
                        <p className="whitespace-pre-line text-sm text-gray-400">{item.hours}</p>
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