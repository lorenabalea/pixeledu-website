import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, BarChart3, Coins, Gamepad2, Layers, Rocket, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "$PUR Token | Pixel Edu",
  description: "Learn about the Pixel Utility Reward ($PUR) token and how it works",
}

export default function TokenPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6 mb-16">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">$PUR Token</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">
          Pixel Utility Reward
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          The native token that powers the Pixel Edu ecosystem, rewarding learners and creators.
        </p>

        <div className="relative w-32 h-32 md:w-48 md:h-48 mt-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-xl opacity-30 animate-pulse"></div>
          <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center shadow-2xl">
            <div className="w-[90%] h-[90%] rounded-full bg-background flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary">$PUR</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Token Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">What is $PUR?</h2>
          <p className="text-muted-foreground">
            $PUR (Pixel Utility Reward) is the native utility token of the Pixel Edu platform. It's designed to
            incentivize learning, reward participation, and create a thriving educational ecosystem in the Web3 space.
          </p>
          <p className="text-muted-foreground">
            Built on the Ethereum blockchain as an ERC-20 token, $PUR enables a seamless integration with the broader
            Web3 ecosystem while providing utility within our platform.
          </p>

          <div className="pt-4">
            <Button asChild size="lg" className="font-heading">
              <Link href="/token/whitepaper">
                Read Whitepaper <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">ERC-20</h3>
              <p className="text-sm text-muted-foreground">Ethereum-based token standard</p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Audited</h3>
              <p className="text-sm text-muted-foreground">Security verified by top auditors</p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">100M</h3>
              <p className="text-sm text-muted-foreground">Total token supply</p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Deflationary</h3>
              <p className="text-sm text-muted-foreground">Token burn mechanism</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How to Earn */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Earn $PUR</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">How to Earn Tokens</h2>
          <p className="text-muted-foreground max-w-[700px]">
            There are multiple ways to earn $PUR tokens within the Pixel Edu ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Complete Courses</h3>
              <p className="text-muted-foreground">
                Earn tokens by completing courses, quizzes, and practical assignments. The more you learn, the more you
                earn.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Achievements</h3>
              <p className="text-muted-foreground">
                Unlock achievements and milestones to earn bonus tokens. Special challenges offer higher rewards.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Contribute</h3>
              <p className="text-muted-foreground">
                Create content, help other learners, or participate in community events to earn additional tokens.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Token Utility */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Token Utility</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">What Can You Do With $PUR?</h2>
          <p className="text-muted-foreground max-w-[700px]">
            $PUR tokens have multiple use cases within and outside our ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Coins className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Access Premium Content</h3>
              <p className="text-sm text-muted-foreground">Unlock exclusive courses and learning materials</p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Governance</h3>
              <p className="text-sm text-muted-foreground">Vote on platform decisions and future development</p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">NFT Marketplace</h3>
              <p className="text-sm text-muted-foreground">Purchase exclusive NFTs and digital credentials</p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Trade & Stake</h3>
              <p className="text-sm text-muted-foreground">Exchange on DEXs or stake for additional rewards</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tokenomics */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Tokenomics</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">Token Distribution</h2>
          <p className="text-muted-foreground max-w-[700px]">
            A transparent breakdown of how $PUR tokens are allocated.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 blur-xl"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Tokenomics+Chart"
                alt="Tokenomics Chart"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <span className="font-medium">Community Rewards</span>
                </div>
                <span className="font-bold">40%</span>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  <span className="font-medium">Team & Advisors</span>
                </div>
                <span className="font-bold">15%</span>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span className="font-medium">Platform Development</span>
                </div>
                <span className="font-bold">20%</span>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "20%" }}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="font-medium">Liquidity & Exchanges</span>
                </div>
                <span className="font-bold">15%</span>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <span className="font-medium">Marketing & Partnerships</span>
                </div>
                <span className="font-bold">10%</span>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-3xl light-mode-card border border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br light-mode-gradient"></div>
        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center text-center space-y-6 max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">
              Ready to Start Earning $PUR?
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              Join our community of learners and start earning $PUR tokens while mastering Web3 skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="font-heading" asChild>
                <Link href="/register">
                  Create Account <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-heading" asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
