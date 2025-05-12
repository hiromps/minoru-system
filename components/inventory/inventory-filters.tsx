"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function InventoryFilters() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search inventory..."
            className="pl-8"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="materials">Raw Materials</SelectItem>
            <SelectItem value="components">Components</SelectItem>
            <SelectItem value="products">Finished Products</SelectItem>
            <SelectItem value="collectibles">Collectibles</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Stock Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="in-stock">In Stock</SelectItem>
            <SelectItem value="low-stock">Low Stock</SelectItem>
            <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            <SelectItem value="on-order">On Order</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Advanced Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Advanced Filters</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="supplier">Supplier</Label>
                <Select>
                  <SelectTrigger id="supplier">
                    <SelectValue placeholder="All Suppliers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Suppliers</SelectItem>
                    <SelectItem value="acme">Acme Plastics</SelectItem>
                    <SelectItem value="global">Global Materials</SelectItem>
                    <SelectItem value="premium">Premium Components</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="warehouse-a">Warehouse A</SelectItem>
                    <SelectItem value="warehouse-b">Warehouse B</SelectItem>
                    <SelectItem value="store-1">Store Location 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="grid gap-2">
                <Label htmlFor="min-price">Price Range</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="min-price"
                    type="number"
                    placeholder="Min"
                    className="w-full"
                  />
                  <span>to</span>
                  <Input
                    id="max-price"
                    type="number"
                    placeholder="Max"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="min-stock">Stock Range</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="min-stock"
                    type="number"
                    placeholder="Min"
                    className="w-full"
                  />
                  <span>to</span>
                  <Input
                    id="max-stock"
                    type="number"
                    placeholder="Max"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Apply Filters</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <Button size="sm" variant="outline" className="h-8">
          Export
        </Button>
      </div>
    </div>
  );
}