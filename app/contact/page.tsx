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
                      href="https://www.instagram.com/pixeledu.web3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      @pixeledu.web3
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
            <Button variant="outline" className="light-mode-card border-primary/10" asChild>
              <Link href="https://www.instagram.com/pixeledu.web3/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </Link>
            </Button>
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
