import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              プラスチック製造・フィギュアケース事業を変革する
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              プラスチック製造業者、コレクター、ショップのための完全なソリューション。業務効率化、在庫管理、事業成長をサポートします。
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all">
                <Link href="/register">無料トライアルを開始</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/demo">デモを依頼</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              クレジットカード不要。14日間無料でお試しいただけます。
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}