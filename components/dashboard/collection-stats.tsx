"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Camera, Box, ImageIcon, Package } from "lucide-react";

const collectionStats = [
  {
    title: "総コレクション数",
    value: "256",
    icon: <Package className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "登録済み写真",
    value: "1,024",
    icon: <Camera className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "保管ケース数",
    value: "32",
    icon: <Box className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "未撮影アイテム",
    value: "15",
    icon: <ImageIcon className="h-4 w-4 text-muted-foreground" />,
  },
];

export function CollectionStats() {
  return (
    <>
      {collectionStats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-2">
                {stat.icon}
                <span className="text-sm font-medium">{stat.title}</span>
              </div>
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