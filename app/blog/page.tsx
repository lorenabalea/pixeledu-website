import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Blog | Pixel Edu",
  description: "Latest articles, tutorials, and insights about Web3, blockchain, and tech education",
}

// Blog post data
const posts = [
  {
    id: "web3-education-future",
    title: "The Future of Web3 Education: Beyond Traditional Learning",
    excerpt:
      "Explore how Web3 technologies are transforming educational models and creating new opportunities for learners worldwide.",
    image: "/placeholder.svg?height=400&width=800&text=Web3+Education",
    date: "May 5, 2025",
    author: "Alex Chen",
    category: "Education",
  },
  {
    id: "token-incentives-learning",
    title: "How Token Incentives Are Revolutionizing Online Learning",
    excerpt:
      "Discover how token-based reward systems are increasing engagement and motivation in educational platforms.",
    image: "/placeholder.svg?height=400&width=800&text=Token+Incentives",
    date: "April 28, 2025",
    author: "Sarah Johnson",
    category: "Tokenomics",
  },
  {
    id: "blockchain-developer-roadmap",
    title: "Blockchain Developer Roadmap 2025: Skills You Need to Master",
    excerpt:
      "A comprehensive guide to the essential skills and technologies aspiring blockchain developers should focus on this year.",
    image: "/placeholder.svg?height=400&width=800&text=Developer+Roadmap",
    date: "April 15, 2025",
    author: "Michael Rodriguez",
    category: "Development",
  },
]

export default function BlogPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6 mb-16">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Our Blog</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">Insights & Updates</h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          Stay informed with the latest articles, tutorials, and insights about Web3, blockchain, and tech education.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <Card className="overflow-hidden border-none light-mode-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={posts[0].image || "/placeholder.svg"}
                alt={posts[0].title}
                width={800}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{posts[0].category}</Badge>
                <h2 className="text-2xl md:text-3xl font-bold font-heading">{posts[0].title}</h2>
                <p className="text-muted-foreground">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{posts[0].author}</span>
                  </div>
                </div>
                <Button className="w-fit mt-4 group" asChild>
                  <Link href={`/blog/${posts[0].id}`}>
                    Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Recent Posts */}
      <div className="mb-16">
        <div className="flex flex-col space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">Recent Articles</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-none light-mode-card hover:shadow-xl light-mode-glow transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/80 hover:bg-primary text-white">{post.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold font-heading line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="ghost" className="w-full group" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-16">
        <div className="flex flex-col space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">Categories</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {["Education", "Tokenomics", "Development", "Blockchain", "Web3", "Tutorials"].map((category) => (
            <Button key={category} variant="outline" className="h-auto py-6 light-mode-card border-primary/10" asChild>
              <Link href={`/blog/category/${category.toLowerCase()}`}>{category}</Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative overflow-hidden rounded-3xl light-mode-card border border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br light-mode-gradient"></div>
        <div className="relative z-10 p-8 md:p-12">
          <div className="flex flex-col items-center text-center space-y-6 max-w-[800px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tighter">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              Get the latest articles, tutorials, and updates delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-background/50 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary flex-1"
              />
              <Button className="font-heading">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
