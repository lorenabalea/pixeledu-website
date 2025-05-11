import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, MessageSquare, Send } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact | Pixel Edu",
  description: "Get in touch with the Pixel Edu team",
}

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6 mb-16">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Contact Us</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">Get In Touch</h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          Have questions or feedback? We'd love to hear from you. Reach out to our team using the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Contact Form */}
        <Card className="light-mode-card border-primary/10">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold font-heading">Send Us a Message</h2>
              </div>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-background/50 border-primary/20 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-primary/20 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    className="bg-background/50 border-primary/20 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    className="min-h-[150px] bg-background/50 border-primary/20 focus-visible:ring-primary"
                  />
                </div>
                <Button type="submit" className="w-full font-heading">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold font-heading mb-6">Contact Information</h2>
            <div className="space-y-6">
              <Card className="light-mode-card border-primary/10">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground mb-2">For general inquiries and support</p>
                    <a href="mailto:hello@pixeledu.io" className="text-primary hover:underline font-medium">
                      hello@pixeledu.io
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Instagram CTA Card */}
              <Card className="light-mode-card border-primary/10 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Instagram className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Follow Us on Instagram</h3>
                      <p className="text-white/80">
                        Stay updated with our latest courses, events, and Web3 insights by following us on Instagram.
                      </p>
                      <Button
                        className="bg-white text-purple-600 hover:bg-white/90 hover:text-purple-700 mt-2"
                        size="lg"
                        asChild
                      >
                        <Link href="https://www.instagram.com/pixeledu.web3/" target="_blank" rel="noopener noreferrer">
                          <Instagram className="mr-2 h-5 w-5" />
                          @pixeledu.web3
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading mb-6">Why Connect With Us?</h2>
            <div className="space-y-4">
              <div className="p-4 border border-primary/10 rounded-lg light-mode-card">
                <h3 className="font-heading font-bold mb-2">Exclusive Content</h3>
                <p className="text-muted-foreground text-sm">
                  Get early access to new courses, tutorials, and educational resources.
                </p>
              </div>
              <div className="p-4 border border-primary/10 rounded-lg light-mode-card">
                <h3 className="font-heading font-bold mb-2">Community Events</h3>
                <p className="text-muted-foreground text-sm">
                  Stay informed about upcoming webinars, AMAs, and virtual meetups.
                </p>
              </div>
              <div className="p-4 border border-primary/10 rounded-lg light-mode-card">
                <h3 className="font-heading font-bold mb-2">Learning Tips</h3>
                <p className="text-muted-foreground text-sm">
                  Discover practical tips and insights to accelerate your Web3 learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Quick Help</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">Common Questions</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Find quick answers to frequently asked questions about contacting us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl mb-3">What's your response time?</h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please
                indicate this in your subject line.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl mb-3">How can I report a bug?</h3>
              <p className="text-muted-foreground">
                Please use our contact form and select "Bug Report" as the subject. Include as much detail as possible,
                including screenshots if available.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl mb-3">Do you offer partnership opportunities?</h3>
              <p className="text-muted-foreground">
                Yes! We're always open to collaborations. Please reach out with details about your organization and
                partnership ideas.
              </p>
            </CardContent>
          </Card>

          <Card className="light-mode-card border-primary/10">
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl mb-3">How can I join your team?</h3>
              <p className="text-muted-foreground">
                Check our Careers page for current openings, or send your resume to careers@pixeledu.io with a cover
                letter explaining why you'd be a great fit.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative overflow-hidden rounded-3xl light-mode-card border border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br light-mode-gradient"></div>
        <div className="relative z-10 p-8 md:p-12">
          <div className="flex flex-col items-center text-center space-y-6 max-w-[800px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tighter">Stay Updated</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Subscribe to our newsletter to receive updates, news, and exclusive offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/50 border-primary/20 focus-visible:ring-primary"
              />
              <Button className="font-heading">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
