"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type StorageLocation = {
  id: string;
  name: string;
  totalCapacity: number;
  usedCapacity: number;
  type: string;
};

const storageLocations: StorageLocation[] = [
  {
    id: "LOC001",
    name: "本棚A",
    totalCapacity: 50,
    usedCapacity: 35,
    type: "本棚",
  },
  {
    id: "LOC002",
    name: "専用棚B",
    totalCapacity: 30,
    usedCapacity: 28,
    type: "専用棚",
  },
  {
    id: "LOC003",
    name: "ガラスケースC",
    totalCapacity: 20,
    usedCapacity: 12,
    type: "ガラスケース",
  },
];

export function StorageLocations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>保管場所の使用状況</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {storageLocations.map((location) => {
            const usagePercentage = (location.usedCapacity / location.totalCapacity) * 100;
            return (
              <div key={location.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{location.name}</p>
                    <p className="text-sm text-muted-foreground">{location.type}</p>
                  </div>
                  <p className="text-sm font-medium">
                    {location.usedCapacity}/{location.totalCapacity}
                  </p>
                </div>
                <Progress value={usagePercentage} className="h-2" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}