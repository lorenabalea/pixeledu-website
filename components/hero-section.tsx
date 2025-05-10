"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          // Adjust particle colors for light/dark mode
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(
            Math.random() * 255,
          )}, ${Math.random() * 0.3 + 0.1})`,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.beginPath()
              // Adjust line color for light/dark mode
              ctx.strokeStyle = `rgba(130, 0, 255, ${0.05 - distance / 3000})`
              ctx.lineWidth = 0.5
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Update gradient for light mode compatibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-6 max-w-[800px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tighter leading-tight">
              Learn on your terms.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                0 bs, 0 outdated information.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto">
              Fast, practical, engaging courses in a Web3 environment with token rewards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-heading text-lg px-8 py-6 h-auto" asChild>
              <Link href="/courses">
                Start Learning Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-heading text-lg px-8 py-6 h-auto" asChild>
              <Link href="/token">Explore $PUR Token</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
            {/* Update card styling for light mode */}
            <div className="light-mode-card p-6 rounded-xl border hover:border-primary/30 transition-colors">
              <h3 className="font-heading font-bold text-xl mb-2">Fast Learning</h3>
              <p className="text-muted-foreground">Practical, concise courses designed for quick skill acquisition</p>
            </div>
            <div className="light-mode-card p-6 rounded-xl border hover:border-primary/30 transition-colors">
              <h3 className="font-heading font-bold text-xl mb-2">Gamified System</h3>
              <p className="text-muted-foreground">Earn XP, unlock achievements, and compete on leaderboards</p>
            </div>
            <div className="light-mode-card p-6 rounded-xl border hover:border-primary/30 transition-colors">
              <h3 className="font-heading font-bold text-xl mb-2">Token Rewards</h3>
              <p className="text-muted-foreground">Earn $PUR tokens for completing courses and challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
