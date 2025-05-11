import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Clock, Coins, Filter, Gamepad2, Search, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Courses | Pixel Edu",
  description: "Browse our Web3, blockchain, and tech courses",
}

// Course data
const courses = [
  {
    id: "blockchain-basics",
    title: "Blockchain Basics",
    description: "Learn the fundamentals of blockchain technology and how it works",
    image: "/images/courses/blockchain-basics.png",
    category: "blockchain",
    level: "Beginner",
    duration: "4 weeks",
    xp: 3000,
    tokens: 300,
    icon: "blocks",
  },
  {
    id: "web-design-web3",
    title: "Web Design for Web3 Apps",
    description: "Master the art of designing user interfaces for decentralized applications",
    image: "/images/courses/web-design-web3.png",
    category: "design",
    level: "Intermediate",
    duration: "6 weeks",
    xp: 4500,
    tokens: 450,
    icon: "design",
  },
  {
    id: "solana-development",
    title: "Solana Development",
    description: "Build high-performance applications on the Solana blockchain",
    image: "/images/courses/solana-development.png",
    category: "development",
    level: "Advanced",
    duration: "8 weeks",
    xp: 6000,
    tokens: 600,
    icon: "code",
  },
  {
    id: "ethereum-blockchain",
    title: "Ethereum Blockchain",
    description: "Dive deep into Ethereum's architecture, smart contracts, and ecosystem",
    image: "/images/courses/ethereum-blockchain.png",
    category: "blockchain",
    level: "Intermediate",
    duration: "7 weeks",
    xp: 5000,
    tokens: 500,
    icon: "ethereum",
  },
  {
    id: "smart-contract-security",
    title: "Smart Contract Security",
    description: "Learn to identify vulnerabilities and secure your smart contracts",
    image: "/images/courses/smart-contract-security.png",
    category: "security",
    level: "Advanced",
    duration: "5 weeks",
    xp: 5500,
    tokens: 550,
    icon: "shield",
  },
  {
    id: "create-memecoin",
    title: "Create Your Own Memecoin",
    description: "Step-by-step guide to creating, launching, and marketing a memecoin",
    image: "/images/courses/create-memecoin.png",
    category: "crypto",
    level: "Intermediate",
    duration: "3 weeks",
    xp: 3500,
    tokens: 350,
    icon: "coin",
  },
  {
    id: "full-stack-web3",
    title: "Full-Stack Web3 Development",
    description: "Learn to build decentralized applications from scratch",
    image: "/images/courses/full-stack-web3.png",
    category: "development",
    level: "Intermediate",
    duration: "8 weeks",
    xp: 5000,
    tokens: 500,
    icon: "code",
  },
  {
    id: "react-for-web3",
    title: "React for Web3",
    description: "Build modern UIs for blockchain applications",
    image: "/images/courses/react-for-web3.png",
    category: "development",
    level: "Beginner",
    duration: "4 weeks",
    xp: 3000,
    tokens: 300,
    icon: "code",
  },
  {
    id: "defi-masterclass",
    title: "DeFi Masterclass",
    description: "Explore decentralized finance protocols and applications",
    image: "/images/courses/defi-masterclass.png",
    category: "blockchain",
    level: "Intermediate",
    duration: "5 weeks",
    xp: 4000,
    tokens: 400,
    icon: "ethereum",
  },
]

export default function CoursesPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Our Courses</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">
          Level Up Your Web3 Skills
        </h1>
        <p className="text-muted-foreground max-w-[700px]">
          Explore our comprehensive courses designed to help you master blockchain technology, Web3 development, and
          more.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search courses..." className="pl-10 bg-background/50 border-primary/20" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Categories */}
      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="w-full max-w-4xl mx-auto flex flex-wrap justify-center">
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden border-none light-mode-card hover:shadow-xl light-mode-glow transition-all duration-300"
          >
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/80 hover:bg-primary text-white">{course.category}</Badge>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{course.level}</Badge>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {course.icon === "blocks" && <Gamepad2 className="w-5 h-5 text-primary" />}
                    {course.icon === "design" && <Gamepad2 className="w-5 h-5 text-primary" />}
                    {course.icon === "code" && <Gamepad2 className="w-5 h-5 text-primary" />}
                    {course.icon === "ethereum" && <Gamepad2 className="w-5 h-5 text-primary" />}
                    {course.icon === "shield" && <Gamepad2 className="w-5 h-5 text-primary" />}
                    {course.icon === "coin" && <Gamepad2 className="w-5 h-5 text-primary" />}
                  </div>
                </div>
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
                <Button asChild className="w-full group">
                  <Link href={`/courses/${course.id}`}>
                    View Course <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
