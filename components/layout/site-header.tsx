"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useAuth, SignInButton, SignUpButton } from "@clerk/nextjs";

const routes = [
  {
    name: "ホーム",
    path: "/",
  },
  {
    name: "機能",
    path: "/features",
  },
  {
    name: "料金",
    path: "/pricing",
  },
  {
    name: "会社概要",
    path: "/about",
  },
  {
    name: "お問い合わせ",
    path: "/contact",
  },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { isSignedIn } = useAuth();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">CaseTrack</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:flex gap-2">
            {isSignedIn ? (
              <Button asChild>
                <Link href="/dashboard">ダッシュボードへ進む</Link>
              </Button>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="outline">ログイン</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button>新規登録</Button>
                </SignUpButton>
              </>
            )}
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-6">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === route.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  {isSignedIn ? (
                    <Button asChild className="w-full">
                      <Link href="/dashboard">ダッシュボードへ進む</Link>
                    </Button>
                  ) : (
                    <>
                      <SignInButton mode="modal">
                        <Button variant="outline" className="w-full">
                          ログイン
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <Button className="w-full">
                          新規登録
                        </Button>
                      </SignUpButton>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}