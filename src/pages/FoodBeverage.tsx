
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Beer, Pizza, Utensils } from "lucide-react";

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
    ],
    menu: [
      {
        title: "Baobab Restaurant Menu",
        image: "/lovable-uploads/fde5bdf2-e90e-4b7a-af24-5c48d7abe001.png",
        description: "Our signature Baobab Restaurant offers a diverse menu of expertly crafted dishes"
      },
      {
        title: "Main Course Selection",
        image: "/lovable-uploads/1588145c-fc22-43e7-94bf-3d8547e5bc6a.png",
        description: "From perfectly grilled steaks to fresh seafood and healthy options"
      },
      {
        title: "Dessert Menu",
        image: "/lovable-uploads/bc1f015f-751d-445a-b6e0-39409dfb4cb7.png",
        description: "Indulge in our selection of sweet treats and classic desserts"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-secondary py-16">
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

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              {category === "menu" ? (
                <>
                  <div className="mt-8 mb-12 bg-card rounded-lg overflow-hidden shadow-lg">
                    <div className="text-center py-8 px-6 border-b border-muted">
                      <h2 className="text-3xl font-bold mb-2">Triangle Country Club Menu</h2>
                      <p className="text-muted-foreground">Experience exquisite dining in our signature restaurant</p>
                    </div>
                    
                    <div className="space-y-16">
                      {/* Starters Section */}
                      <div className="px-6 pt-8">
                        <div className="relative h-80 overflow-hidden rounded-lg mb-8">
                          <img 
                            src="/lovable-uploads/fde5bdf2-e90e-4b7a-af24-5c48d7abe001.png" 
                            alt="Starters Menu" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                            <h3 className="text-4xl font-bold text-white px-6 py-8">STARTERS</h3>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">SOUP OF THE DAY</h4>
                                <p className="text-muted-foreground">Special soup made by the Chef for the day served with home-made bread rolls</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$8.50</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">CHICKEN LIVER PATTEE</h4>
                                <p className="text-muted-foreground">Pan-Fried Peri Peri & Pepper Chicken Livers served on toasted bread</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$12.00</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">PRAWN COCKTAIL</h4>
                                <p className="text-muted-foreground">Succulent prawns tossed in a creamy, tangy Marie Rose sauce, served on a bed of crisp lettuce and garnished with a wedge of fresh lemon</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$14.50</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">WRAPPED CHEESE & BACON</h4>
                                <p className="text-muted-foreground">Cheese wrapped in bacon and well grilled to perfection, served with Sweet & Sour Sauce</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$10.50</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">CEASER SALAD</h4>
                                <p className="text-muted-foreground">Grilled chicken tenderloins served on a bed of cos lettuce, with bacon, Parmesan cheese, croutons, Caesar dressing, and a fried egg</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$13.00</p>
                              </div>
                              <div className="mb-6">
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">GARLIC BREAD</h4>
                                <p className="text-muted-foreground">Freshly baked bread with garlic butter and herbs</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$6.50</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Main Course Section */}
                      <div className="px-6">
                        <div className="relative h-80 overflow-hidden rounded-lg mb-8">
                          <img 
                            src="/lovable-uploads/1588145c-fc22-43e7-94bf-3d8547e5bc6a.png" 
                            alt="Main Course Menu" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                            <h3 className="text-4xl font-bold text-white px-6 py-8">MAIN COURSES</h3>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-3xl font-bold mb-6">BEEF</h3>
                            <div className="space-y-8">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">POTTERHOUSE STEAK</h4>
                                <p className="text-muted-foreground">A grilled tender premier T-bone topped with a rich demi-glace</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$28.00</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">STEAK, EGG & CHIPS</h4>
                                <p className="text-muted-foreground">Grilled marinated rump steak cooked to perfection, served with crispy golden chips and a fried egg prepared just the way you like it</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$24.50</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">FILLET MIGNON</h4>
                                <p className="text-muted-foreground">A well grilled tender steak served with chasseur sauce</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$32.00</p>
                              </div>
                            </div>
                            
                            <h3 className="text-3xl font-bold mb-6 mt-12">LAMB</h3>
                            <div className="space-y-8">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">LAMB CHOPS</h4>
                                <p className="text-muted-foreground">Rich, succulent lamb chops grilled to perfection served with Mint Sauce</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$26.50</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-3xl font-bold mb-6">CHICKEN</h3>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">CHICKEN SCHNITZEL</h4>
                                <p className="text-muted-foreground">A well crumbed Chicken Fillet in garlic sauce</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$18.50</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">CHICKEN CORDON BLEU</h4>
                                <p className="text-muted-foreground">Grilled lemon and herb marinated breast seasoned with mushroom cubes served with cheese sauce</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$22.00</p>
                              </div>
                            </div>
                            
                            <h3 className="text-3xl font-bold mb-6 mt-12">PORK</h3>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">BBQ PORK RIBS</h4>
                                <p className="text-muted-foreground">Oven baked Pork Ribs served with barbeque sauce</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$28.00</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">HONEY & GARLIC PORK CHOPS</h4>
                                <p className="text-muted-foreground">Succulent pork chops glazed with a sweet and savory honey-garlic sauce, grilled to perfection</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$24.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                          <div>
                            <h3 className="text-3xl font-bold mb-6">FISH</h3>
                            <div className="space-y-8">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">BEV BUTTERED FISH</h4>
                                <p className="text-muted-foreground">Crispy, golden fish fillets battered in a flavorful lemon batter, then fried to perfection</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$22.00</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">GRILLED SALMON</h4>
                                <p className="text-muted-foreground">Fresh salmon fillet, grilled and served with lemon butter sauce</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$26.00</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-3xl font-bold mb-6">PLATTERS</h3>
                            <div className="space-y-8">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">SEAFOOD PLATTER</h4>
                                <p className="text-muted-foreground">A delightful selection of fresh seafood, including prawns, calamari, fish fillet, and mussels, expertly cooked and served with your choice of sauces and sides</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$38.00</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">TAPAS PLATTER</h4>
                                <p className="text-muted-foreground">A delicious assortment of bite-sized meats perfect for sharing or enjoying as a light snack.</p>
                                <p className="text-sm text-muted-foreground mt-1 italic">$32.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-12">
                          <h3 className="text-3xl font-bold mb-6">HEALTH CORNER</h3>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <div className="space-y-8">
                                <div>
                                  <h4 className="text-lg font-medium text-primary uppercase mb-1">TOFU STIR-FRY</h4>
                                  <p className="text-muted-foreground">A mix of colorful vegetables, stir-fried with tofu on a bed of rice</p>
                                  <p className="text-sm text-muted-foreground mt-1 italic">$16.50</p>
                                </div>
                                <div>
                                  <h4 className="text-lg font-medium text-primary uppercase mb-1">TRIANGLE ROASTED VEGETABLES</h4>
                                  <p className="text-muted-foreground">A nourishing bowl of a variety of roasted vegetables like sweet potatoes, bell peppers, and zucchini, drizzled with olive oil and lemon dressing</p>
                                  <p className="text-sm text-muted-foreground mt-1 italic">$14.00</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="space-y-8">
                                <div>
                                  <h4 className="text-lg font-medium text-primary uppercase mb-1">CHICKEN SPAGHETTI & CUCUMBER SALAD</h4>
                                  <p className="text-muted-foreground">Tender grilled chicken served with perfectly cooked spaghetti, tossed in a light dressing and paired with a refreshing cucumber salad</p>
                                  <p className="text-sm text-muted-foreground mt-1 italic">$18.00</p>
                                </div>
                                <div>
                                  <h4 className="text-lg font-medium text-primary uppercase mb-1">QUINOA BUDDHA BOWL</h4>
                                  <p className="text-muted-foreground">Nutrient-rich quinoa topped with avocado, roasted chickpeas, and fresh vegetables</p>
                                  <p className="text-sm text-muted-foreground mt-1 italic">$17.50</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Dessert Section */}
                      <div className="px-6 pb-8">
                        <div className="relative h-80 overflow-hidden rounded-lg mb-8">
                          <img 
                            src="/lovable-uploads/bc1f015f-751d-445a-b6e0-39409dfb4cb7.png" 
                            alt="Dessert Menu" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                            <h3 className="text-4xl font-bold text-white px-6 py-8">DESSERTS</h3>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">APPLE CRUMBLE WITH CUSTARD SAUCE</h4>
                              <p className="text-muted-foreground">Warm apple crumble with a golden crust, served with creamy vanilla custard sauce</p>
                              <p className="text-sm text-muted-foreground mt-1 italic">$8.50</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">ICE CREAM & CHOC SAUCE</h4>
                              <p className="text-muted-foreground">Selection of premium ice cream drizzled with rich chocolate sauce</p>
                              <p className="text-sm text-muted-foreground mt-1 italic">$7.00</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">CREPE SUZETTE</h4>
                              <p className="text-muted-foreground">Thin French pancakes served with a caramelized orange sauce and flambéed tableside</p>
                              <p className="text-sm text-muted-foreground mt-1 italic">$10.00</p>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">DEEP FRIED ICE CREAM</h4>
                              <p className="text-muted-foreground">Ice cream coated in a crispy shell, quickly fried and served with a drizzle of honey</p>
                              <p className="text-sm text-muted-foreground mt-1 italic">$9.00</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">SWISS ROLL WITH ICE CREAM</h4>
                              <p className="text-muted-foreground">Classic Swiss roll served with a scoop of vanilla ice cream</p>
                              <p className="text-sm text-muted-foreground mt-1 italic">$8.50</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">CHOCOLATE FONDANT</h4>
                              <p className="text-muted-foreground">Warm chocolate cake with a gooey center, served with vanilla ice cream</p>
                              <p className="text-sm text-muted-foreground mt-1 italic">$11.00</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-12 border-t border-muted pt-8">
                          <h3 className="text-2xl font-bold mb-6 text-center">BEVERAGES</h3>
                          <div className="grid md:grid-cols-3 gap-8">
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-4">HOT DRINKS</h4>
                              <ul className="space-y-2">
                                <li className="flex justify-between">
                                  <span>Coffee (Espresso, Americano, Cappuccino)</span>
                                  <span className="text-muted-foreground">$3.50</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>Tea (Various Blends)</span>
                                  <span className="text-muted-foreground">$3.00</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>Hot Chocolate</span>
                                  <span className="text-muted-foreground">$4.00</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-4">COLD DRINKS</h4>
                              <ul className="space-y-2">
                                <li className="flex justify-between">
                                  <span>Soft Drinks</span>
                                  <span className="text-muted-foreground">$2.50</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>Fresh Juice (Orange, Apple, Pineapple)</span>
                                  <span className="text-muted-foreground">$4.00</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>Iced Tea</span>
                                  <span className="text-muted-foreground">$3.00</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-4">ALCOHOLIC BEVERAGES</h4>
                              <ul className="space-y-2">
                                <li className="flex justify-between">
                                  <span>House Wine (Glass)</span>
                                  <span className="text-muted-foreground">$6.00</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>Local Beer</span>
                                  <span className="text-muted-foreground">$5.00</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>Premium Spirits</span>
                                  <span className="text-muted-foreground">From $8.00</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
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
                        {item.hours && (
                          <div className="rounded-md bg-muted p-4">
                            <p className="text-sm font-medium text-card-foreground">Hours of Operation</p>
                            <p className="whitespace-pre-line text-sm text-muted-foreground">{item.hours}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default FoodBeverage;
