import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Testimonials</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">
          What Our Students Say
        </h2>
        <p className="text-muted-foreground max-w-[700px]">
          Hear from our community of learners who have transformed their skills and careers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          {
            name: "Alex Johnson",
            role: "Frontend Developer",
            avatar: "AJ",
            content:
              "The Web3 Development course was exactly what I needed to transition into blockchain development. The gamified approach kept me motivated, and the $PUR rewards were a nice bonus!",
            rating: 5,
          },
          {
            name: "Sarah Chen",
            role: "Blockchain Engineer",
            avatar: "SC",
            content:
              "I've tried many online learning platforms, but Pixel Edu stands out with its practical approach and Web3 integration. The community is incredibly supportive too.",
            rating: 5,
          },
          {
            name: "Michael Rodriguez",
            role: "Product Designer",
            avatar: "MR",
            content:
              "The courses are concise and focused on practical skills. I was able to build my first dApp within weeks of starting. The token rewards are a great incentive!",
            rating: 4,
          },
          {
            name: "Emma Wilson",
            role: "Smart Contract Developer",
            avatar: "EW",
            content:
              "Pixel Edu's approach to teaching smart contract security is outstanding. The interactive challenges and real-world examples helped me understand complex concepts quickly.",
            rating: 5,
          },
          {
            name: "David Park",
            role: "Web3 Entrepreneur",
            avatar: "DP",
            content:
              "As someone building in the Web3 space, the knowledge I gained from Pixel Edu has been invaluable. The platform's focus on practical, up-to-date content is refreshing.",
            rating: 4,
          },
          {
            name: "Olivia Martinez",
            role: "Crypto Journalist",
            avatar: "OM",
            content:
              "The Web3 journalism course gave me the technical understanding I needed to cover blockchain topics accurately. The gamification made learning complex topics fun!",
            rating: 5,
          },
        ].map((testimonial, index) => (
          <Card
            key={index}
            className="border-none bg-black/40 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`} />
                  <AvatarFallback className="bg-primary/20 text-primary">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                    />
                  ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
