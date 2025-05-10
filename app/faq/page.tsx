import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, HelpCircle, Mail } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ | Pixel Edu",
  description: "Frequently asked questions about Pixel Edu",
}

// FAQ data
const faqs = [
  {
    question: "What is Pixel Edu?",
    answer:
      "Pixel Edu is a gamified learning platform for young people (ages 16–35) who want to specialize in IT, Web3, blockchain, and the Metaverse. We offer fast, practical, engaging courses in a Web3 environment with token rewards.",
  },
  {
    question: "How does the $PUR token work?",
    answer:
      "The $PUR (Pixel Utility Reward) token is our native cryptocurrency that rewards users for completing courses, achieving milestones, and participating in the community. Tokens can be used to access premium content, purchase NFTs, participate in governance, or traded on exchanges.",
  },
  {
    question: "Do I need prior knowledge to take your courses?",
    answer:
      "Not necessarily! We offer courses for all skill levels, from complete beginners to advanced practitioners. Each course clearly indicates the difficulty level and any prerequisites, so you can choose the right path for your current knowledge level.",
  },
  {
    question: "Can I access courses without a Web3 wallet?",
    answer:
      "Yes, you can access and complete courses using a traditional email/password login. However, to receive and use $PUR tokens, you'll need to connect a Web3 wallet. We support popular wallets like MetaMask and Phantom.",
  },
  {
    question: "How often are new courses added?",
    answer:
      "We add new courses and update existing content regularly to keep pace with the rapidly evolving Web3 ecosystem. Our team monitors industry trends and technologies to ensure our curriculum remains relevant and up-to-date.",
  },
]

export default function FAQPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6 mb-16">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">FAQ</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          Find answers to common questions about Pixel Edu, our courses, and the $PUR token.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto mb-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10">
              <AccordionTrigger className="text-left font-heading py-6 hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Still Have Questions */}
      <div className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl light-mode-card border border-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br light-mode-gradient"></div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tighter">Still Have Questions?</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Can't find the answer you're looking for? Please contact our support team.
              </p>

              <Button size="lg" className="font-heading" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="max-w-3xl mx-auto mt-16">
        <div className="flex flex-col space-y-4 mb-8">
          <h2 className="text-2xl font-bold font-heading">Helpful Resources</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button variant="outline" className="h-auto py-6 justify-start light-mode-card border-primary/10" asChild>
            <Link href="/about">
              About Us <ArrowRight className="ml-auto h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-6 justify-start light-mode-card border-primary/10" asChild>
            <Link href="/token">
              $PUR Token <ArrowRight className="ml-auto h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-6 justify-start light-mode-card border-primary/10" asChild>
            <Link href="/courses">
              Browse Courses <ArrowRight className="ml-auto h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
