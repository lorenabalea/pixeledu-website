import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Clock, Coins, Gamepad2, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import NewsletterSignup from "@/components/newsletter-signup"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonials-section"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />
      <BenefitsSection />

      {/* Featured Courses */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">
            Popular Courses
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">
            Start Your Web3 Journey
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Explore our most popular courses and level up your skills in the Web3 ecosystem.
          </p>
        </div>

        <Tabs defaultValue="tech" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-xl">
              <TabsTrigger value="tech">Tech</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="journalism">Journalism</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="tech" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Full-Stack Web3 Development",
                  description: "Learn to build decentralized applications from scratch",
                  xp: 5000,
                  duration: "8 weeks",
                  tokens: 500,
                  level: "Intermediate",
                },
                {
                  title: "Smart Contract Security",
                  description: "Master the art of writing secure smart contracts",
                  xp: 4500,
                  duration: "6 weeks",
                  tokens: 450,
                  level: "Advanced",
                },
                {
                  title: "React for Web3",
                  description: "Build modern UIs for blockchain applications",
                  xp: 3000,
                  duration: "4 weeks",
                  tokens: 300,
                  level: "Beginner",
                },
              ].map((course, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none light-mode-card hover:shadow-xl light-mode-glow transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-br light-mode-gradient flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                        <Gamepad2 className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{course.level}</Badge>
                      <h3 className="text-xl font-bold font-heading">{course.title}</h3>
                      <p className="text-muted-foreground text-sm">{course.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Zap className="w-4 h-4 text-yellow-500" />
                          <span>{course.xp} XP</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Coins className="w-4 h-4 text-green-500" />
                          <span>{course.tokens} $PUR</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full group">
                        View Course{" "}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild size="lg" className="font-heading">
                <Link href="/courses">
                  Explore All Courses <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Blockchain Fundamentals",
                  description: "Understand the core concepts of blockchain technology",
                  xp: 2500,
                  duration: "3 weeks",
                  tokens: 250,
                  level: "Beginner",
                },
                {
                  title: "DeFi Masterclass",
                  description: "Explore decentralized finance protocols and applications",
                  xp: 4000,
                  duration: "5 weeks",
                  tokens: 400,
                  level: "Intermediate",
                },
                {
                  title: "NFT Creation & Trading",
                  description: "Learn to create, mint and trade NFTs on various marketplaces",
                  xp: 3500,
                  duration: "4 weeks",
                  tokens: 350,
                  level: "Beginner",
                },
              ].map((course, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none bg-black/40 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-purple-900/20 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                        <Gamepad2 className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{course.level}</Badge>
                      <h3 className="text-xl font-bold font-heading">{course.title}</h3>
                      <p className="text-muted-foreground text-sm">{course.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Zap className="w-4 h-4 text-yellow-500" />
                          <span>{course.xp} XP</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Coins className="w-4 h-4 text-green-500" />
                          <span>{course.tokens} $PUR</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full group">
                        View Course{" "}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="design" className="text-center py-10">
            <p className="text-muted-foreground">Design courses coming soon!</p>
          </TabsContent>

          <TabsContent value="journalism" className="text-center py-10">
            <p className="text-muted-foreground">Journalism courses coming soon!</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Token Section */}
      <section className="container px-4 md:px-6 py-12 bg-gradient-to-b from-background to-background/50 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">$PUR Token</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">
              Learn & Earn with $PUR
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              Our native token rewards your learning achievements. Complete courses, earn XP, and receive $PUR tokens
              that can be used within our ecosystem or traded on exchanges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="font-heading font-bold">Achievement Rewards</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Earn tokens for completing courses, quests, and challenges
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Gamepad2 className="w-6 h-6 text-primary" />
                  <h3 className="font-heading font-bold">Gamified Learning</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Level up, compete on leaderboards, and earn while you learn
                </p>
              </div>
            </div>
            <Button asChild size="lg" className="font-heading">
              <Link href="/token">
                Learn About $PUR <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-900/20 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative z-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center shadow-2xl">
              <div className="w-56 h-56 rounded-full bg-background flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-5xl font-bold font-heading text-primary">$PUR</h3>
                  <p className="text-sm text-muted-foreground mt-2">Pixel Utility Reward</p>
                </div>
              </div>
            </div>
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="w-[500px] h-[500px] rounded-full border border-primary/20 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/10 animate-[spin_40s_linear_infinite_reverse]"></div>
              <div className="absolute w-[300px] h-[300px] rounded-full border border-primary/5 animate-[spin_30s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Dashboard Preview */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">
            Dashboard Preview
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">
            Track Your Progress
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Monitor your learning journey, track XP, earn badges, and compete on leaderboards.
          </p>
        </div>

        <div className="relative mt-10 rounded-xl overflow-hidden border border-primary/10 shadow-2xl shadow-primary/5">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-purple-900/5 to-transparent"></div>
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Dashboard Preview"
            width={1600}
            height={800}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex items-end justify-center pb-8">
            <Button size="lg" className="font-heading">
              Coming Soon
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSignup />

      {/* Add the theme switcher */}
      <ThemeSwitcher />
    </div>
  )
}
