import { Badge } from "@/components/ui/badge"
import { Brain, Coins, Gamepad2, Zap } from "lucide-react"

export default function BenefitsSection() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Why Choose Us</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">
          The Future of Learning
        </h2>
        <p className="text-muted-foreground max-w-[700px]">
          Our platform combines cutting-edge technology with gamified learning to make education engaging and rewarding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[
          {
            icon: Brain,
            title: "Practical Skills",
            description:
              "Learn skills that are relevant in today's tech industry with hands-on projects and real-world applications.",
          },
          {
            icon: Gamepad2,
            title: "Gamified Learning",
            description:
              "Earn XP, unlock achievements, and level up as you progress through courses and complete challenges.",
          },
          {
            icon: Zap,
            title: "Fast-Paced",
            description:
              "Our courses are designed to be concise and focused, allowing you to learn quickly and efficiently.",
          },
          {
            icon: Coins,
            title: "Token Rewards",
            description: "Earn $PUR tokens for completing courses, challenges, and contributing to the community.",
          },
        ].map((benefit, index) => (
          <div
            key={index}
            className="light-mode-card p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl light-mode-glow group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <benefit.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
