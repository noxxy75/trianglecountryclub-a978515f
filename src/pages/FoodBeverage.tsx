
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
        image: ""
      },
      {
        title: "Special Events",
        description: "Custom catering and private dining rooms available",
        hours: "By Reservation",
        image: ""
      }
    ],
    bar: [
      {
        title: "19th Hole Bar",
        description: "Casual drinks and light fare with fellow members",
        hours: "11:00 AM - 11:00 PM",
        image: ""
      },
      {
        title: "Wine Cellar",
        description: "Extensive wine collection and tasting events",
        hours: "5:00 PM - 10:00 PM",
        image: ""
      }
    ],
    cafe: [
      {
        title: "Poolside Café",
        description: "Quick bites and refreshments by the pool",
        hours: "9:00 AM - 6:00 PM (Seasonal)",
        image: ""
      },
      {
        title: "Golf Course Snack Bar",
        description: "Convenient refreshments during your round",
        hours: "7:00 AM - Sunset",
        image: ""
      }
    ],
    menu: [
      {
        title: "Baobab Restaurant Menu",
        image: "",
        description: "Our signature Baobab Restaurant offers a diverse menu of expertly crafted dishes"
      },
      {
        title: "Main Course Selection",
        image: "",
        description: "From perfectly grilled steaks to fresh seafood and healthy options"
      },
      {
        title: "Dessert Menu",
        image: "",
        description: "Indulge in our selection of sweet treats and classic desserts"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-secondary py-16" style={{
      backgroundImage: "url('/lovable-uploads/baobab-background.png')", 
      backgroundSize: "contain", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "soft-light",
      backgroundAttachment: "fixed",
      backgroundOpacity: 0.2
    }}>
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
                        <div className="mb-8 p-4 bg-muted/10 rounded-lg">
                          <h3 className="text-4xl font-bold text-primary">STARTERS</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">SOUP OF THE DAY</h4>
                                <p className="text-muted-foreground">Special soup made by the Chef for the day served with home-made bread rolls</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">CHICKEN LIVER PATTEE</h4>
                                <p className="text-muted-foreground">Pan-Fried Peri Peri & Pepper Chicken Livers served on toasted bread</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">PRAWN COCKTAIL</h4>
                                <p className="text-muted-foreground">Succulent prawns tossed in a creamy, tangy Marie Rose sauce, served on a bed of crisp lettuce and garnished with a wedge of fresh lemon</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">WRAPPED CHEESE & BACON</h4>
                                <p className="text-muted-foreground">Cheese wrapped in bacon and well grilled to perfection, served with Sweet & Sour Sauce</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">CEASER SALAD</h4>
                                <p className="text-muted-foreground">Grilled chicken tenderloins served on a bed of cos lettuce, with bacon, Parmesan cheese, croutons, Caesar dressing, and a fried egg</p>
                              </div>
                              <div className="mb-6">
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">GARLIC BREAD</h4>
                                <p className="text-muted-foreground">Freshly baked bread with garlic butter and herbs</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Main Course Section */}
                      <div className="px-6">
                        <div className="mb-8 p-4 bg-muted/10 rounded-lg">
                          <h3 className="text-4xl font-bold text-primary">MAIN COURSES</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-3xl font-bold mb-6">BEEF</h3>
                            <div className="space-y-8">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">POTTERHOUSE STEAK</h4>
                                <p className="text-muted-foreground">A grilled tender premier T-bone topped with a rich demi-glace</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">STEAK, EGG & CHIPS</h4>
                                <p className="text-muted-foreground">Grilled marinated rump steak cooked to perfection, served with crispy golden chips and a fried egg prepared just the way you like it</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">FILLET MIGNON</h4>
                                <p className="text-muted-foreground">A well grilled tender steak served with chasseur sauce</p>
                              </div>
                            </div>
                            
                            <h3 className="text-3xl font-bold mb-6 mt-12">LAMB</h3>
                            <div className="space-y-8">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">LAMB CHOPS</h4>
                                <p className="text-muted-foreground">Rich, succulent lamb chops grilled to perfection served with Mint Sauce</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-3xl font-bold mb-6">CHICKEN</h3>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">CHICKEN SCHNITZEL</h4>
                                <p className="text-muted-foreground">A well crumbed Chicken Fillet in garlic sauce</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">CHICKEN CORDON BLEU</h4>
                                <p className="text-muted-foreground">Grilled lemon and herb marinated breast seasoned with mushroom cubes served with cheese sauce</p>
                              </div>
                            </div>
                            
                            <h3 className="text-3xl font-bold mb-6 mt-12">PORK</h3>
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">BBQ PORK RIBS</h4>
                                <p className="text-muted-foreground">Oven baked Pork Ribs served with barbeque sauce</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">HONEY & GARLIC PORK CHOPS</h4>
                                <p className="text-muted-foreground">Succulent pork chops glazed with a sweet and savory honey-garlic sauce, grilled to perfection</p>
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
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">GRILLED SALMON</h4>
                                <p className="text-muted-foreground">Fresh salmon fillet, grilled and served with lemon butter sauce</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-3xl font-bold mb-6">PLATTERS</h3>
                            <div className="space-y-8">
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">SEAFOOD PLATTER</h4>
                                <p className="text-muted-foreground">A delightful selection of fresh seafood, including prawns, calamari, fish fillet, and mussels, expertly cooked and served with your choice of sauces and sides</p>
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-primary uppercase mb-1">TAPAS PLATTER</h4>
                                <p className="text-muted-foreground">A delicious assortment of bite-sized meats perfect for sharing or enjoying as a light snack.</p>
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
                                </div>
                                <div>
                                  <h4 className="text-lg font-medium text-primary uppercase mb-1">TRIANGLE ROASTED VEGETABLES</h4>
                                  <p className="text-muted-foreground">A nourishing bowl of a variety of roasted vegetables like sweet potatoes, bell peppers, and zucchini, drizzled with olive oil and lemon dressing</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="space-y-8">
                                <div>
                                  <h4 className="text-lg font-medium text-primary uppercase mb-1">CHICKEN SPAGHETTI & CUCUMBER SALAD</h4>
                                  <p className="text-muted-foreground">Tender grilled chicken served with perfectly cooked spaghetti, tossed in a light dressing and paired with a refreshing cucumber salad</p>
                                </div>
                                <div>
                                  <h4 className="text-lg font-medium text-primary uppercase mb-1">QUINOA BUDDHA BOWL</h4>
                                  <p className="text-muted-foreground">Nutrient-rich quinoa topped with avocado, roasted chickpeas, and fresh vegetables</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Dessert Section */}
                      <div className="px-6 pb-8">
                        <div className="mb-8 p-4 bg-muted/10 rounded-lg">
                          <h3 className="text-4xl font-bold text-primary">DESSERTS</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">APPLE CRUMBLE WITH CUSTARD SAUCE</h4>
                              <p className="text-muted-foreground">Warm apple crumble with a golden crust, served with creamy vanilla custard sauce</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">ICE CREAM & CHOC SAUCE</h4>
                              <p className="text-muted-foreground">Selection of premium ice cream drizzled with rich chocolate sauce</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">CREPE SUZETTE</h4>
                              <p className="text-muted-foreground">Thin French pancakes served with a caramelized orange sauce and flambéed tableside</p>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">DEEP FRIED ICE CREAM</h4>
                              <p className="text-muted-foreground">Ice cream coated in a crispy shell, quickly fried and served with a drizzle of honey</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">SWISS ROLL WITH ICE CREAM</h4>
                              <p className="text-muted-foreground">Classic Swiss roll served with a scoop of vanilla ice cream</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-1">CHOCOLATE FONDANT</h4>
                              <p className="text-muted-foreground">Warm chocolate cake with a gooey center, served with vanilla ice cream</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-12 border-t border-muted pt-8">
                          <h3 className="text-2xl font-bold mb-6 text-center">BEVERAGES</h3>
                          <div className="grid md:grid-cols-3 gap-8">
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-4">HOT DRINKS</h4>
                              <ul className="space-y-2">
                                <li>Coffee (Espresso, Americano, Cappuccino)</li>
                                <li>Tea (Various Blends)</li>
                                <li>Hot Chocolate</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-4">COLD DRINKS</h4>
                              <ul className="space-y-2">
                                <li>Soft Drinks</li>
                                <li>Fresh Juice (Orange, Apple, Pineapple)</li>
                                <li>Iced Tea</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-primary uppercase mb-4">ALCOHOLIC BEVERAGES</h4>
                              <ul className="space-y-2">
                                <li>House Wine (Glass)</li>
                                <li>Local Beer</li>
                                <li>Premium Spirits</li>
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
