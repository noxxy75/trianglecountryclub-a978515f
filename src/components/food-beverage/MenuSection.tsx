
import { ReactNode } from "react";

interface MenuSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const MenuSection = ({ title, children, className = "" }: MenuSectionProps) => {
  return (
    <div className={`px-6 ${className}`}>
      <div className="mb-8 p-4 bg-muted/10 rounded-lg">
        <h3 className="text-4xl font-bold text-primary">{title}</h3>
      </div>
      {children}
    </div>
  );
};
