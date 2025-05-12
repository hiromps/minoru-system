"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

type CollectionItem = {
  id: string;
  name: string;
  category: string;
  purchasePrice: string;
  purchaseDate: string;
  storageLocation: string;
  caseType: string;
  hasPhoto: boolean;
};

const recentItems: CollectionItem[] = [
  {
    id: "COL001",
    name: "ねんどろいど 初音ミク",
    category: "フィギュア",
    purchasePrice: "¥4,500",
    purchaseDate: "2023-12-01",
    storageLocation: "本棚A-1",
    caseType: "アクリルケース",
    hasPhoto: true,
  },
  {
    id: "COL002",
    name: "METAL BUILD ガンダムアストレイ",
    category: "フィギュア",
    purchasePrice: "¥25,000",
    purchaseDate: "2023-11-15",
    storageLocation: "専用棚B-2",
    caseType: "専用ケース",
    hasPhoto: true,
  },
  {
    id: "COL003",
    name: "figma レム",
    category: "フィギュア",
    purchasePrice: "¥6,800",
    purchaseDate: "2023-10-30",
    storageLocation: "本棚A-2",
    caseType: "クリアケース",
    hasPhoto: false,
  },
];

export function CollectionDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>最近の登録アイテム</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {recentItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between space-x-4 rounded-lg border p-4"
              >
                <div className="space-y-1">
                  <p className="font-medium">{item.name}</p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {item.purchaseDate}
                    </span>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm font-medium">{item.purchasePrice}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.storageLocation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}