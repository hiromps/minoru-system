"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, BoxIcon, DollarSign, Package, Users } from "lucide-react";

const stats = [
  {
    title: "総売上高",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "新規注文",
    value: "12,234",
    change: "+10.3%",
    trend: "up",
    icon: <Package className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "アクティブ顧客",
    value: "573",
    change: "+12.5%",
    trend: "up",
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "在庫アイテム",
    value: "1,432",
    change: "-3.2%",
    trend: "down",
    icon: <BoxIcon className="h-4 w-4 text-muted-foreground" />,
  },
];

export function DashboardStats() {
  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-2">
                {stat.icon}
                <span className="text-sm font-medium">{stat.title}</span>
              </div>
              {stat.trend === "up" ? (
                <span className="flex items-center text-xs text-green-600 dark:text-green-500">
                  <ArrowUpIcon className="mr-1 h-3 w-3" />
                  {stat.change}
                </span>
              ) : (
                <span className="flex items-center text-xs text-red-600 dark:text-red-500">
                  <ArrowDownIcon className="mr-1 h-3 w-3" />
                  {stat.change}
                </span>
              )}
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}