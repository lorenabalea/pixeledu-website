"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your API
      setIsSubmitted(true)
    }
  }

  return (
    <section className="container px-4 md:px-6">
      <div className="relative overflow-hidden rounded-3xl light-mode-card border border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br light-mode-gradient"></div>
        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center text-center space-y-4 max-w-[800px] mx-auto">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">
              Stay Updated
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">
              Join Our Newsletter
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              Get the latest updates on new courses, Web3 trends, and exclusive offers directly to your inbox.
            </p>

            {isSubmitted ? (
              <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-3 rounded-lg mt-4">
                <Check className="w-5 h-5" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-6">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/50 border-primary/20 focus-visible:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="font-heading">
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
