import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturesSection } from '@/components/home/features-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { PricingSection } from '@/components/home/pricing-section';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ビジネスを変革する準備はできていますか？
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground/80 md:text-xl">
                  14日間の無料トライアルを今すぐ開始。クレジットカード不要。
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
                  <Link href="/register">無料で始める</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/contact">営業に問い合わせ</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}