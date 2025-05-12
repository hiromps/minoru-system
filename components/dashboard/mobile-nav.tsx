"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BoxIcon,
  ChevronDown,
  Factory,
  Home,
  LineChart,
  Menu,
  PackageOpen,
  Settings,
  ShoppingBag,
  Users,
  Camera,
  Box,
  Truck,
  Palette,
  Cube,
  X,
} from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
  subItems?: {
    title: string;
    href: string;
  }[];
};
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const items = [
  {
    title: "ダッシュボード",
    href: "/dashboard",
    icon: <Home className="mr-2 h-4 w-4" />,
  },
  {
    title: "コレクション管理",
    href: "/dashboard/collection-management",
    icon: <Camera className="mr-2 h-4 w-4" />,
    subItems: [
      { title: "アイテム登録", href: "/dashboard/collection-management/items" },
      { title: "保管場所管理", href: "/dashboard/collection-management/storage" },
      { title: "写真管理", href: "/dashboard/collection-management/photos" },
    ],
  },
  {
    title: "製造管理",
    href: "/dashboard/manufacturing",
    icon: <Factory className="mr-2 h-4 w-4" />,
    subItems: [
      { title: "受注管理", href: "/dashboard/manufacturing/orders" },
      { title: "在庫管理", href: "/dashboard/manufacturing/inventory" },
      { title: "生産スケジュール", href: "/dashboard/manufacturing/schedule" },
    ],
  },
  {
    title: "POS管理",
    href: "/dashboard/pos",
    icon: <ShoppingBag className="mr-2 h-4 w-4" />,
    subItems: [
      { title: "販売管理", href: "/dashboard/pos/sales" },
      { title: "在庫管理", href: "/dashboard/pos/inventory" },
      { title: "顧客管理", href: "/dashboard/pos/customers" },
    ],
  },
  {
    title: "サプライチェーン",
    href: "/dashboard/supply-chain",
    icon: <Truck className="mr-2 h-4 w-4" />,
    subItems: [
      { title: "コスト分析", href: "/dashboard/supply-chain/cost-analysis" },
      { title: "最適化提案", href: "/dashboard/supply-chain/optimization" },
    ],
  },
  {
    title: "カスタマイズ",
    href: "/dashboard/customize",
    icon: <Palette className="mr-2 h-4 w-4" />,
    subItems: [
      { title: "3Dプレビュー", href: "/dashboard/customize/3d-preview" },
      { title: "デザイン設定", href: "/dashboard/customize/design" },
      { title: "価格計算", href: "/dashboard/customize/pricing" },
    ],
  },
  {
    title: "レポート",
    href: "/dashboard/reports",
    icon: <LineChart className="mr-2 h-4 w-4" />,
  },
  {
    title: "設定",
    href: "/dashboard/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [openSubMenus, setOpenSubMenus] = React.useState<number[]>([]);
  const pathname = usePathname();

  const toggleSubMenu = (index: number) => {
    setOpenSubMenus(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <span className="text-lg font-bold">CaseTrack</span>
        </Link>
        <nav className="grid gap-2 py-6">
          {items.map((item, index) => (
            <div key={index}>
              <div
                className={cn(
                  "flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors cursor-pointer",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "transparent"
                )}
                onClick={() => item.subItems ? toggleSubMenu(index) : null}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </div>
                {item.subItems && (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openSubMenus.includes(index) ? "rotate-180" : ""
                    )}
                  />
                )}
              </div>
              {item.subItems && openSubMenus.includes(index) && (
                <div className="ml-6 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors",
                        pathname === subItem.href ? "bg-accent text-accent-foreground" : "transparent"
                      )}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}