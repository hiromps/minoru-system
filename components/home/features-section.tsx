import {
  BarChart,
  BoxIcon,
  ClipboardCheck,
  Factory,
  Layers,
  LineChart,
  PackageOpen,
  PenTool,
  ShoppingBag,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <BoxIcon className="h-10 w-10 text-primary" />,
    title: "在庫管理",
    description:
      "すべての材料、製品、コレクションをリアルタイムで一元管理できます。",
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    title: "受注管理",
    description:
      "見積もりから配送まで、カスタム仕様と価格設定を含む注文プロセスを効率化します。",
  },
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: "生産計画",
    description:
      "生産スケジュールを最適化し、無駄を削減して納期を改善します。",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "顧客管理",
    description:
      "詳細なプロフィールとコミュニケーションツールで顧客との関係を構築・維持します。",
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "分析・レポート",
    description:
      "強力な分析ツールとカスタムレポートでデータに基づく意思決定を実現します。",
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "カスタムデザインツール",
    description:
      "直感的なインターフェースでリアルタイムの価格表示と共に製品デザインをカスタマイズできます。",
  },
  {
    icon: <PackageOpen className="h-10 w-10 text-primary" />,
    title: "コレクション管理",
    description:
      "コレクター向け：フィギュアコレクションを簡単にカタログ化、管理、展示できます。",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "サプライチェーン最適化",
    description:
      "コスト計算と改善提案によりサプライチェーンを最適化します。",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              あらゆるニーズに対応する強力な機能
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              包括的なツールスイートで業務を効率化し、生産性を向上させ、収益を最大化します。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.slice(0, 6).map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 text-center transition-all hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.slice(6, 8).map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 rounded-lg border bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}