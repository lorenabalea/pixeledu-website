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
      pulse: number
      pulseSpeed: number
    }[] = []

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 8), 150)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(
            Math.random() * 255,
          )}, ${Math.random() * 0.5 + 0.2})`,
          pulse: Math.random() * 2 * Math.PI,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.lineWidth = 0.3
      ctx.strokeStyle = "rgba(130, 0, 255, 0.1)"

      // Horizontal grid lines
      const gridSpacing = 50
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.pulse += particle.pulseSpeed

        // Pulsating size effect
        const pulsatingSize = particle.size * (1 + 0.3 * Math.sin(particle.pulse))

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulsatingSize, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Add glow effect
        const glow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, pulsatingSize * 3)
        glow.addColorStop(0, particle.color)
        glow.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulsatingSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        // Connect particles with dynamic opacity based on distance
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 180) {
              ctx.beginPath()
              const opacity = 0.15 - distance / 1200
              const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
              gradient.addColorStop(0, `rgba(130, 0, 255, ${opacity})`)
              gradient.addColorStop(1, `rgba(80, 200, 255, ${opacity})`)

              ctx.strokeStyle = gradient
              ctx.lineWidth = 0.8
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-900/10 to-primary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(130,0,255,0.15)_0%,_rgba(10,10,30,0)_70%)]"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/5 to-purple-900/5 blur-3xl animate-[pulse_15s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-purple-900/5 to-primary/5 blur-3xl animate-[pulse_20s_ease-in-out_infinite_alternate]"></div>

        <div className="absolute top-[20%] left-[15%] w-[1px] h-[20px] bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-[moveUp_15s_linear_infinite]"></div>
        <div className="absolute top-[45%] left-[25%] w-[1px] h-[30px] bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-[moveUp_20s_linear_infinite]"></div>
        <div className="absolute top-[30%] right-[20%] w-[1px] h-[25px] bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-[moveUp_12s_linear_infinite]"></div>
        <div className="absolute top-[60%] right-[30%] w-[1px] h-[15px] bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-[moveUp_18s_linear_infinite]"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-6 max-w-[800px] relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border border-primary/20 rounded-full animate-spin-slow opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-primary/20 rounded-full animate-[spin-slow_15s_linear_infinite_reverse] opacity-50"></div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tighter leading-tight">
              Learn on your terms.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-purple-600 animate-pulse">
                0 bs, 0 outdated information.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto">
              Fast, practical, engaging courses in a Web3 environment with token rewards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-heading text-lg px-8 py-6 h-auto relative group overflow-hidden" asChild>
              <Link href="/courses">
                <span className="relative z-10 flex items-center">
                  Start Learning Now{" "}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-heading text-lg px-8 py-6 h-auto border-primary/50 hover:bg-primary/10 transition-colors"
              asChild
            >
              <Link href="/token">Explore $PUR Token</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-4xl relative">
            {/* Decorative line */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>

            {/* Update card styling for light mode */}
            <div className="light-mode-card p-6 rounded-xl border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 backdrop-blur-md">
              <h3 className="font-heading font-bold text-xl mb-2">Fast Learning</h3>
              <p className="text-muted-foreground">Practical, concise courses designed for quick skill acquisition</p>
            </div>
            <div className="light-mode-card p-6 rounded-xl border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 backdrop-blur-md animate-[float_8s_ease-in-out_infinite_0.5s]">
              <h3 className="font-heading font-bold text-xl mb-2">Gamified System</h3>
              <p className="text-muted-foreground">Earn XP, unlock achievements, and compete on leaderboards</p>
            </div>
            <div className="light-mode-card p-6 rounded-xl border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 backdrop-blur-md">
              <h3 className="font-heading font-bold text-xl mb-2">Token Rewards</h3>
              <p className="text-muted-foreground">Earn $PUR tokens for completing courses and challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
