"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserNav } from "@/components/dashboard/user-nav";
import { MobileNav } from "@/components/dashboard/mobile-nav";

export function ClientHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden md:block">
            <span className="text-xl font-bold">CaseTrack</span>
          </Link>
          <MobileNav />
        </div>
        <div className="flex items-center gap-4">
          <UserNav />
        </div>
      </div>
    </header>
  );
} 