import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react"
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

              <Card className="light-mode-card border-primary/10">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Instagram</h3>
                    <p className="text-muted-foreground mb-2">Follow us for updates and behind-the-scenes</p>
                    <a
                      href="https://instagram.com/pixeledu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      @pixeledu
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="light-mode-card border-primary/10">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-2">Available Monday-Friday, 9am-5pm EST</p>
                    <a href="tel:+18005551234" className="text-primary hover:underline font-medium">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="light-mode-card border-primary/10">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground mb-2">Our headquarters</p>
                    <address className="not-italic text-primary">
                      123 Web3 Avenue
                      <br />
                      San Francisco, CA 94103
                      <br />
                      United States
                    </address>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading mb-6">Connect With Us</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Button variant="outline" className="light-mode-card border-primary/10" asChild>
                <Link href="https://twitter.com/pixeledu" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 3.93 3.93 0 0 1-1.1.17 4.9 4.9 0 0 1-.77-.07 4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06 11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z" />
                  </svg>
                  Twitter
                </Link>
              </Button>
              <Button variant="outline" className="light-mode-card border-primary/10" asChild>
                <Link href="https://discord.gg/pixeledu" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.28a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.28.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                  Discord
                </Link>
              </Button>
              <Button variant="outline" className="light-mode-card border-primary/10" asChild>
                <Link href="https://instagram.com/pixeledu" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </Link>
              </Button>
              <Button variant="outline" className="light-mode-card border-primary/10" asChild>
                <Link href="https://t.me/pixeledu" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.93 1.25-5.44 3.68-.51.35-.98.53-1.4.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.29-.48.79-.74 3.07-1.34 5.12-2.22 6.15-2.66 2.93-1.24 3.54-1.46 3.94-1.46.1 0 .32.02.46.19.12.14.15.34.17.47-.01.09.01.19.01.27z" />
                  </svg>
                  Telegram
                </Link>
              </Button>
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

      {/* Map Section */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">Find Us</h2>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden light-mode-card border border-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br light-mode-gradient opacity-10"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.95397618613!2d-122.43913217412364!3d37.77710275675243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1683900604563!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pixel Edu Location"
            className="relative z-10"
          ></iframe>
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
