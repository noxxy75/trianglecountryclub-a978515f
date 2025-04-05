
import { TabsContent } from "@/components/ui/tabs";
import { FacilitiesList } from "./FacilitiesList";
import { MenuTab } from "./MenuTab";
import { menuItems } from "@/data/foodBeverageData";

interface TabContentProps {
  category: "dining" | "bar" | "cafe" | "menu";
}

export const TabContent = ({ category }: TabContentProps) => {
  return (
    <TabsContent value={category}>
      {category === "menu" ? (
        <MenuTab />
      ) : (
        <FacilitiesList items={menuItems[category]} />
      )}
    </TabsContent>
  );
};
