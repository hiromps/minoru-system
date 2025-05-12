import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface DashboardHeaderProps {
  heading: string;
  description?: string;
  children?: React.ReactNode;
  showAddButton?: boolean;
  addButtonLabel?: string;
  onAddClick?: () => void;
}

export function DashboardHeader({
  heading,
  description,
  children,
  showAddButton = false,
  addButtonLabel = "Add New",
  onAddClick,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="font-heading text-3xl md:text-4xl">{heading}</h1>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
      {showAddButton && (
        <Button onClick={onAddClick}>
          <Plus className="mr-2 h-4 w-4" />
          {addButtonLabel}
        </Button>
      )}
    </div>
  );
}