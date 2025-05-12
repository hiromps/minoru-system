"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as React from "react";
import {
  BoxIcon,
  ChevronDown,
  Factory,
  Home,
  LineChart,
  PackageOpen,
  Settings,
  ShoppingBag,
  Users,
  Camera,
  Box,
  Truck,
  Palette,
  Cube,
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

export function DashboardNav() {
  const pathname = usePathname();
  const [openSubMenus, setOpenSubMenus] = React.useState<number[]>([]);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenus(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <nav className="grid items-start gap-2 py-4">
      {items.map((item, index) => (
        <div key={index}>
          <div
            className={cn(
              "group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer",
              pathname === item.href ? "bg-accent text-accent-foreground" : "transparent"
            )}
            onClick={() => item.subItems ? toggleSubMenu(index) : null}
          >
            <div className="flex items-center">
              {item.icon}
              <span>{item.title}</span>
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
            <div className="ml-6 mt-2 space-y-2">
              {item.subItems.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={subItem.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
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
  );
}