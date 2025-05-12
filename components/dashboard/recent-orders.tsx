"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const orders = [
  {
    id: "ORD-2024-0123",
    customer: "Acme Collectibles",
    date: "2024-06-28",
    amount: "$1,234.56",
    status: "processing",
  },
  {
    id: "ORD-2024-0122",
    customer: "Figurine World",
    date: "2024-06-27",
    amount: "$845.00",
    status: "shipped",
  },
  {
    id: "ORD-2024-0121",
    customer: "Collector's Paradise",
    date: "2024-06-26",
    amount: "$2,340.90",
    status: "delivered",
  },
  {
    id: "ORD-2024-0120",
    customer: "Premium Displays",
    date: "2024-06-25",
    amount: "$567.80",
    status: "pending",
  },
  {
    id: "ORD-2024-0119",
    customer: "Michael Smith",
    date: "2024-06-24",
    amount: "$128.50",
    status: "canceled",
  },
];

export function RecentOrders() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn(
                    "capitalize",
                    order.status === "processing" && "border-blue-500 text-blue-500",
                    order.status === "shipped" && "border-yellow-500 text-yellow-500",
                    order.status === "delivered" && "border-green-500 text-green-500",
                    order.status === "canceled" && "border-red-500 text-red-500",
                    order.status === "pending" && "border-orange-500 text-orange-500"
                  )}
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button size="icon" variant="ghost" asChild>
                  <Link href={`/dashboard/orders/${order.id}`}>
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View order {order.id}</span>
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}