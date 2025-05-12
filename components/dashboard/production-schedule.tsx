"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const productionSchedule = [
  {
    id: "PRD-2024-0023",
    product: "Custom Display Case - Acrylic",
    quantity: 50,
    startDate: new Date(2024, 5, 30),
    endDate: new Date(2024, 6, 2),
    status: "scheduled",
    utilization: 75,
  },
  {
    id: "PRD-2024-0022",
    product: "Stackable Cube Display",
    quantity: 100,
    startDate: new Date(2024, 6, 3),
    endDate: new Date(2024, 6, 5),
    status: "scheduled",
    utilization: 90,
  },
  {
    id: "PRD-2024-0021",
    product: "LED Display Cabinet",
    quantity: 25,
    startDate: new Date(2024, 6, 6),
    endDate: new Date(2024, 6, 8),
    status: "scheduled",
    utilization: 60,
  },
  {
    id: "PRD-2024-0020",
    product: "Wall-mounted Display Shelf",
    quantity: 40,
    startDate: new Date(2024, 6, 9),
    endDate: new Date(2024, 6, 11),
    status: "scheduled",
    utilization: 80,
  },
];

export function ProductionSchedule() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Production ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Date Range</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Utilization</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productionSchedule.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.product}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>
                    {format(item.startDate, "MMM d")} - {format(item.endDate, "MMM d, yyyy")}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="capitalize">
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div 
                      className={cn(
                        "h-2.5 rounded-full",
                        item.utilization > 85 ? "bg-green-500" : 
                        item.utilization > 65 ? "bg-yellow-500" : "bg-red-500"
                      )} 
                      style={{ width: `${item.utilization}%` }}>
                    </div>
                  </div>
                  <span className="ml-2 text-xs">{item.utilization}%</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}