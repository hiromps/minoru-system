"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type GalleryItem = {
  id: string;
  name: string;
  imageUrl: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "COL001",
    name: "ねんどろいど 初音ミク",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "COL002",
    name: "METAL BUILD ガンダムアストレイ",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "COL003",
    name: "figma レム",
    imageUrl: "/placeholder.svg",
  },
];

export function CollectionGallery() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>最近の写真</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}