
interface MenuItemProps {
  title: string;
  description: string;
}

export const MenuItem = ({ title, description }: MenuItemProps) => {
  return (
    <div>
      <h4 className="text-lg font-medium text-primary uppercase mb-1">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
