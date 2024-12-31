import { Coffee, Beer, Pizza, ChevronDown, ShoppingBag, Flag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const FoodBeverage = () => {
  const [selectedCategory, setSelectedCategory] = useState("dining");

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
      },
      {
        title: "Takeaway",
        description: "Fresh meals and snacks prepared for pickup",
        hours: "7:00 AM - 8:00 PM",
        image: "/lovable-uploads/eecd94d8-49bc-4c8a-8df2-9aa63f03f711.png"
      },
      {
        title: "Golf Shack",
        description: "Quick grab-and-go options at the course",
        hours: "6:00 AM - 7:00 PM",
        image: "/lovable-uploads/f02ed9e7-1d08-4ddb-a8c4-6d9ad88fdaba.png"
      }
    ]
  };

  const categoryIcons = {
    dining: <Pizza className="h-4 w-4 mr-2" />,
    bar: <Beer className="h-4 w-4 mr-2" />,
    cafe: <Coffee className="h-4 w-4 mr-2" />
  };

  const categoryLabels = {
    dining: "Dining",
    bar: "Bar & Lounge",
    cafe: "Café & Snacks"
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">Food & Beverage</h1>

        <div className="mx-auto max-w-5xl">
          <div className="flex justify-center mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-64 px-4 py-2 text-white bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors">
                <span className="flex items-center">
                  {categoryIcons[selectedCategory as keyof typeof categoryIcons]}
                  {categoryLabels[selectedCategory as keyof typeof categoryLabels]}
                </span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] bg-[#2A2F3C] border-gray-700">
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <DropdownMenuItem
                    key={key}
                    className="text-white hover:bg-purple-500/20 cursor-pointer flex items-center"
                    onClick={() => setSelectedCategory(key)}
                  >
                    {categoryIcons[key as keyof typeof categoryIcons]}
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {menuItems[selectedCategory as keyof typeof menuItems].map((item, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default FoodBeverage;