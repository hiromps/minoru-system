import Image from "next/image";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "CaseTrackは私たちの製造プロセスを完全に変革しました。廃棄物を30%削減し、納期を25%短縮することができました。",
    author: "山田 美咲",
    role: "代表取締役社長, フィギュアクラフト株式会社",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote:
      "コレクターとして、全てのフィギュアとディスプレイケースを一元管理できるようになりました。アプリは直感的で美しいデザインです。",
    author: "佐藤 健一",
    role: "プロフェッショナルコレクター",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote:
      "カスタムオーダーシステムにより業務が効率化され、顧客満足度が向上しました。CaseTrack導入後、受注が40%増加しています。",
    author: "田中 優子",
    role: "オーナー, プレミアムディスプレイズ",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              業界のリーダーから信頼されています
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              CaseTrackがどのようにビジネスを変革したか、お客様の声をご紹介します。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col justify-between space-y-4 rounded-xl bg-card p-6 shadow-sm",
                index === 0 && "md:col-span-2 lg:col-span-1"
              )}
            >
              <div className="space-y-4">
                <Quote className="h-6 w-6 text-primary" />
                <p className="text-lg">{testimonial.quote}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-medium">{testimonial.author}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}