"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

const inventoryItems = [
  {
    name: "Acrylic Sheet - Clear 5mm",
    stock: 234,
    max: 500,
    warning: 100,
  },
  {
    name: "Glass Panels - 10x10cm",
    stock: 78,
    max: 200,
    warning: 50,
  },
  {
    name: "LED Strip Lights - White",
    stock: 45,
    max: 150,
    warning: 30,
  },
  {
    name: "Metal Frame Connectors",
    stock: 18,
    max: 100,
    warning: 25,
  },
  {
    name: "Dust-proof Seals",
    stock: 156,
    max: 300,
    warning: 50,
  },
];

export function InventoryStatus() {
  return (
    <div className="space-y-4">
      {inventoryItems.map((item) => {
        const percentage = Math.round((item.stock / item.max) * 100);
        const isLowStock = item.stock <= item.warning;
        
        return (
          <div key={item.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.name}</span>
                {isLowStock && (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                )}
              </div>
              <span className={cn(
                "text-sm",
                isLowStock ? "text-red-500" : "text-muted-foreground"
              )}>
                {item.stock} units
              </span>
            </div>
            <Progress
              value={percentage}
              className={cn(
                isLowStock ? "text-red-500" : ""
              )}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span>{item.max}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}