import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and collectors",
    price: {
      monthly: "$29",
      annually: "$290",
    },
    features: [
      "Up to 3 users",
      "Inventory management",
      "Basic order tracking",
      "Collection catalog",
      "Standard reports",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and serious collectors",
    price: {
      monthly: "$79",
      annually: "$790",
    },
    features: [
      "Up to 10 users",
      "Advanced inventory management",
      "Custom order workflows",
      "Production planning",
      "Advanced analytics",
      "API access",
      "Custom design tool",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations with complex needs",
    price: {
      monthly: "$199",
      annually: "$1,990",
    },
    features: [
      "Unlimited users",
      "Full supply chain optimization",
      "Custom integrations",
      "White-label options",
      "Advanced security",
      "Dedicated account manager",
      "24/7 phone support",
      "Onsite training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Choose the plan that's right for your business. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative flex flex-col rounded-xl border bg-card p-6 shadow-sm",
                plan.popular && "border-primary ring-1 ring-primary"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price.monthly}</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  or {plan.price.annually} billed annually
                </p>
              </div>
              <ul className="mt-6 mb-8 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  asChild
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : plan.name === "Enterprise"
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : ""
                  )}
                >
                  <Link href={plan.name === "Enterprise" ? "/contact" : "/register"}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom solution? <Link href="/contact" className="font-medium text-primary hover:underline">Contact our sales team</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}