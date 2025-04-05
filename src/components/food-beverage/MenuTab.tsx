
import { MenuSection } from "./MenuSection";
import { MenuItem } from "./MenuItem";
import { Separator } from "@/components/ui/separator";

export const MenuTab = () => {
  return (
    <div className="mt-8 mb-12 bg-card rounded-lg overflow-hidden shadow-lg">
      <div className="text-center py-8 px-6 border-b border-muted">
        <h2 className="text-3xl font-bold mb-2">Triangle Country Club Menu</h2>
        <p className="text-muted-foreground">Experience exquisite dining in our signature restaurant</p>
      </div>
      
      <div className="space-y-16">
        {/* Starters Section */}
        <MenuSection title="STARTERS">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                <MenuItem 
                  title="SOUP OF THE DAY"
                  description="Special soup made by the Chef for the day served with home-made bread rolls"
                />
                <MenuItem 
                  title="CHICKEN LIVER PATTEE"
                  description="Pan-Fried Peri Peri & Pepper Chicken Livers served on toasted bread"
                />
                <MenuItem 
                  title="PRAWN COCKTAIL"
                  description="Succulent prawns tossed in a creamy, tangy Marie Rose sauce, served on a bed of crisp lettuce and garnished with a wedge of fresh lemon"
                />
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <MenuItem 
                  title="WRAPPED CHEESE & BACON"
                  description="Cheese wrapped in bacon and well grilled to perfection, served with Sweet & Sour Sauce"
                />
                <MenuItem 
                  title="CEASER SALAD"
                  description="Grilled chicken tenderloins served on a bed of cos lettuce, with bacon, Parmesan cheese, croutons, Caesar dressing, and a fried egg"
                />
                <MenuItem 
                  title="GARLIC BREAD"
                  description="Freshly baked bread with garlic butter and herbs"
                />
              </div>
            </div>
          </div>
        </MenuSection>
        
        {/* Main Course Section */}
        <MenuSection title="MAIN COURSES">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">BEEF</h3>
              <div className="space-y-8">
                <MenuItem 
                  title="POTTERHOUSE STEAK"
                  description="A grilled tender premier T-bone topped with a rich demi-glace"
                />
                <MenuItem 
                  title="STEAK, EGG & CHIPS"
                  description="Grilled marinated rump steak cooked to perfection, served with crispy golden chips and a fried egg prepared just the way you like it"
                />
                <MenuItem 
                  title="FILLET MIGNON"
                  description="A well grilled tender steak served with chasseur sauce"
                />
              </div>
              
              <h3 className="text-3xl font-bold mb-6 mt-12">LAMB</h3>
              <div className="space-y-8">
                <MenuItem 
                  title="LAMB CHOPS"
                  description="Rich, succulent lamb chops grilled to perfection served with Mint Sauce"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-6">CHICKEN</h3>
              <div className="space-y-6">
                <MenuItem 
                  title="CHICKEN SCHNITZEL"
                  description="A well crumbed Chicken Fillet in garlic sauce"
                />
                <MenuItem 
                  title="CHICKEN CORDON BLEU"
                  description="Grilled lemon and herb marinated breast seasoned with mushroom cubes served with cheese sauce"
                />
              </div>
              
              <h3 className="text-3xl font-bold mb-6 mt-12">PORK</h3>
              <div className="space-y-6">
                <MenuItem 
                  title="BBQ PORK RIBS"
                  description="Oven baked Pork Ribs served with barbeque sauce"
                />
                <MenuItem 
                  title="HONEY & GARLIC PORK CHOPS"
                  description="Succulent pork chops glazed with a sweet and savory honey-garlic sauce, grilled to perfection"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">FISH</h3>
              <div className="space-y-8">
                <MenuItem 
                  title="BEV BUTTERED FISH"
                  description="Crispy, golden fish fillets battered in a flavorful lemon batter, then fried to perfection"
                />
                <MenuItem 
                  title="GRILLED SALMON"
                  description="Fresh salmon fillet, grilled and served with lemon butter sauce"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-6">PLATTERS</h3>
              <div className="space-y-8">
                <MenuItem 
                  title="SEAFOOD PLATTER"
                  description="A delightful selection of fresh seafood, including prawns, calamari, fish fillet, and mussels, expertly cooked and served with your choice of sauces and sides"
                />
                <MenuItem 
                  title="TAPAS PLATTER"
                  description="A delicious assortment of bite-sized meats perfect for sharing or enjoying as a light snack."
                />
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-6">HEALTH CORNER</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-8">
                  <MenuItem 
                    title="TOFU STIR-FRY"
                    description="A mix of colorful vegetables, stir-fried with tofu on a bed of rice"
                  />
                  <MenuItem 
                    title="TRIANGLE ROASTED VEGETABLES"
                    description="A nourishing bowl of a variety of roasted vegetables like sweet potatoes, bell peppers, and zucchini, drizzled with olive oil and lemon dressing"
                  />
                </div>
              </div>
              <div>
                <div className="space-y-8">
                  <MenuItem 
                    title="CHICKEN SPAGHETTI & CUCUMBER SALAD"
                    description="Tender grilled chicken served with perfectly cooked spaghetti, tossed in a light dressing and paired with a refreshing cucumber salad"
                  />
                  <MenuItem 
                    title="QUINOA BUDDHA BOWL"
                    description="Nutrient-rich quinoa topped with avocado, roasted chickpeas, and fresh vegetables"
                  />
                </div>
              </div>
            </div>
          </div>
        </MenuSection>
        
        {/* Dessert Section */}
        <MenuSection title="DESSERTS" className="pb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <MenuItem 
                title="APPLE CRUMBLE WITH CUSTARD SAUCE"
                description="Warm apple crumble with a golden crust, served with creamy vanilla custard sauce"
              />
              <MenuItem 
                title="ICE CREAM & CHOC SAUCE"
                description="Selection of premium ice cream drizzled with rich chocolate sauce"
              />
              <MenuItem 
                title="CREPE SUZETTE"
                description="Thin French pancakes served with a caramelized orange sauce and flambéed tableside"
              />
            </div>
            
            <div className="space-y-6">
              <MenuItem 
                title="DEEP FRIED ICE CREAM"
                description="Ice cream coated in a crispy shell, quickly fried and served with a drizzle of honey"
              />
              <MenuItem 
                title="SWISS ROLL WITH ICE CREAM"
                description="Classic Swiss roll served with a scoop of vanilla ice cream"
              />
              <MenuItem 
                title="CHOCOLATE FONDANT"
                description="Warm chocolate cake with a gooey center, served with vanilla ice cream"
              />
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
        </MenuSection>
      </div>
    </div>
  );
};
