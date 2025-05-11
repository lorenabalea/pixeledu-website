import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, BarChart3, Coins, Gamepad2, Layers, Rocket, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "$PUR Token | Pixel Edu",
  description: "Learn about the Pixel Utility Reward ($PUR) token on Solana blockchain and how it works",
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
          The native Solana-based token that powers the Pixel Edu ecosystem, rewarding learners and creators.
        </p>

        <div className="relative w-64 h-64 md:w-80 md:h-80 mt-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-xl opacity-30 animate-pulse"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Image
              src="/images/pur-token.png"
              alt="$PUR Token"
              width={400}
              height={400}
              className="w-full h-auto rounded-full shadow-2xl"
            />
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
            Built on the Solana blockchain as an SPL token, $PUR enables lightning-fast transactions with minimal fees,
            making it perfect for microtransactions and rewards within our educational ecosystem.
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
              <h3 className="font-heading font-bold mb-2">SPL Token</h3>
              <p className="text-sm text-muted-foreground">Solana Program Library token standard</p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">Audited</h3>
              <p className="text-sm text-muted-foreground">Security verified by top Solana auditors</p>
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
              <h3 className="font-heading font-bold mb-2">Fast & Efficient</h3>
              <p className="text-sm text-muted-foreground">Low-cost Solana transactions</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Solana Integration */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">
            Solana Powered
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">Built on Solana</h2>
          <p className="text-muted-foreground max-w-[700px]">
            We chose Solana for its speed, efficiency, and low transaction costs, making it ideal for educational
            rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-primary"
                  viewBox="0 0 397 311"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.5604 237.016L97.0424 203.8C98.6069 202.211 100.7 201.274 102.952 201.166C105.204 201.058 107.377 201.787 109.078 203.207L180.576 265.95C182.278 267.37 184.451 268.099 186.703 267.991C188.955 267.883 191.048 266.946 192.612 265.357L325.014 129.561"
                    stroke="currentColor"
                    strokeWidth="15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M283.742 129.561H325.014V170.833"
                    stroke="currentColor"
                    strokeWidth="15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M325.014 73.9834L292.532 41.2003C290.967 39.6109 288.874 38.6743 286.622 38.5663C284.37 38.4583 282.197 39.1873 280.496 40.6072L109.078 192.071C107.377 193.491 105.204 194.22 102.952 194.112C100.7 194.004 98.6069 193.067 97.0424 191.478L64.5604 158.695"
                    stroke="currentColor"
                    strokeWidth="15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Solana processes thousands of transactions per second, ensuring instant rewards and token transfers.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Coins className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Minimal Fees</h3>
              <p className="text-muted-foreground">
                Solana's low transaction costs allow us to distribute even small rewards efficiently, maximizing value
                for learners.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Energy Efficient</h3>
              <p className="text-muted-foreground">
                Solana's proof-of-stake consensus mechanism is environmentally friendly, aligning with our
                sustainability values.
              </p>
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
              <p className="text-sm text-muted-foreground">Exchange on Solana DEXs or stake for additional rewards</p>
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
              <Image src="/images/pur-token.png" alt="$PUR Token" width={400} height={400} className="w-full h-auto" />
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

      {/* Wallet Integration */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Get Started</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">Compatible Wallets</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Connect your Solana wallet to start earning and using $PUR tokens.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="light-mode-card border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104z" />
                  <path d="M415.5 128h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
                  <path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold mb-2">Phantom</h3>
              <p className="text-sm text-muted-foreground">The most popular Solana wallet</p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-bold mb-2">Solflare</h3>
              <p className="text-sm text-muted-foreground">Feature-rich Solana wallet</p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-heading font-bold mb-2">Backpack</h3>
              <p className="text-sm text-muted-foreground">Multi-chain wallet with Solana support</p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 10H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-bold mb-2">Ledger</h3>
              <p className="text-sm text-muted-foreground">Hardware wallet with Solana support</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-3xl light-mode-card border border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br light-mode-gradient"></div>
        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center text-center space-y-6 max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">
              Ready to Start Earning $PUR on Solana?
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
