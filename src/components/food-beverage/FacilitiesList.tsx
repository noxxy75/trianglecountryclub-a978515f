
import { FacilityCard } from "./FacilityCard";

interface FacilityItem {
  title: string;
  description: string;
  hours?: string;
  image?: string;
}

interface FacilitiesListProps {
  items: FacilityItem[];
}

export const FacilitiesList = ({ items }: FacilitiesListProps) => {
  return (
    <div className="mt-8 grid gap-8 md:grid-cols-2">
      {items.map((item, index) => (
        <FacilityCard
          key={index}
          title={item.title}
          description={item.description}
          hours={item.hours}
          image={item.image}
        />
      ))}
    </div>
  );
};
