import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Globe, Lightbulb, Rocket, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Pixel Edu",
  description: "Learn about Pixel Edu, our mission, and our team",
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6 mb-16">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">About Us</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">
          Revolutionizing Web3 Education
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          We're on a mission to make tech education accessible, engaging, and rewarding through gamification and Web3
          technology.
        </p>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br light-mode-gradient opacity-20"></div>
          <Image
            src="/placeholder.svg?height=400&width=600&text=Our+Story"
            alt="Our Story"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">Our Story</h2>
          <p className="text-muted-foreground">
            Pixel Edu was born from a simple observation: traditional education wasn't keeping pace with the rapidly
            evolving Web3 ecosystem. Too many courses were outdated, theoretical, or simply boring.
          </p>
          <p className="text-muted-foreground">
            Founded in 2023 by a team of blockchain developers, educators, and gaming enthusiasts, we set out to create
            a learning platform that combines practical skills with gamification and token rewards.
          </p>
          <p className="text-muted-foreground">
            Our approach is simple: fast, practical, engaging courses in a Web3 environment. No outdated information, no
            unnecessary theory—just the skills you need to succeed in the decentralized future.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Our Purpose</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">Mission & Vision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To make tech education accessible to everyone by creating a gamified learning platform that rewards
                users with real value through $PUR tokens. We believe in learning by doing, and that education should be
                engaging, practical, and rewarding.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading Web3 education platform, creating a new generation of skilled blockchain
                developers, designers, and entrepreneurs. We envision a world where anyone can access quality education
                and be rewarded for their learning journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Our Values</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">What We Stand For</h2>
          <p className="text-muted-foreground max-w-[700px]">
            These core principles guide everything we do at Pixel Edu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and teaching methods to provide the best learning experience.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Practicality</h3>
              <p className="text-muted-foreground">
                We focus on practical, applicable skills that prepare you for real-world challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe education should be accessible to everyone, regardless of background or location.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Community</h3>
              <p className="text-muted-foreground">
                We foster a supportive community where learners can connect, collaborate, and grow together.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20" id="team">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">Meet the Founders</h2>
          <p className="text-muted-foreground max-w-[700px]">
            A diverse team of experts passionate about education and Web3 technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Chen",
              role: "CEO & Co-Founder",
              bio: "Former blockchain developer with a passion for education. Alex has worked at leading Web3 companies before founding Pixel Edu.",
              image: "/placeholder.svg?height=300&width=300&text=Alex",
            },
            {
              name: "Sarah Johnson",
              role: "CTO & Co-Founder",
              bio: "Full-stack developer and smart contract expert. Sarah leads our technical team and curriculum development.",
              image: "/placeholder.svg?height=300&width=300&text=Sarah",
            },
            {
              name: "Michael Rodriguez",
              role: "Chief Learning Officer",
              bio: "Former professor with expertise in gamification and educational technology. Michael designs our learning experiences.",
              image: "/placeholder.svg?height=300&width=300&text=Michael",
            },
            {
              name: "Emily Wong",
              role: "Head of Content",
              bio: "Technical writer and blockchain enthusiast. Emily ensures our content is accurate, engaging, and up-to-date.",
              image: "/placeholder.svg?height=300&width=300&text=Emily",
            },
            {
              name: "David Park",
              role: "Head of Community",
              bio: "Community builder and Web3 advocate. David manages our growing community of learners and creators.",
              image: "/placeholder.svg?height=300&width=300&text=David",
            },
            {
              name: "Olivia Martinez",
              role: "Head of Partnerships",
              bio: "Business development expert with extensive connections in the Web3 space. Olivia builds strategic partnerships.",
              image: "/placeholder.svg?height=300&width=300&text=Olivia",
            },
          ].map((member, index) => (
            <Card key={index} className="light-mode-card border-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partnerships */}
      <div className="mb-20" id="partnerships">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Partnerships</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">Our Partners</h2>
          <p className="text-muted-foreground max-w-[700px]">
            We collaborate with leading companies and organizations in the Web3 space.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6].map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center p-6 light-mode-card border border-primary/10 rounded-xl"
            >
              <Image
                src={`/placeholder.svg?height=80&width=120&text=Partner+${partner}`}
                alt={`Partner ${partner}`}
                width={120}
                height={80}
                className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-3xl light-mode-card border border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br light-mode-gradient"></div>
        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center text-center space-y-6 max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">Join Our Mission</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Be part of the revolution in Web3 education. Start learning, earning, and growing with Pixel Edu today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="font-heading" asChild>
                <Link href="/register">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-heading" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
