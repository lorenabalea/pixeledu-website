import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 bg-gradient-to-tr from-primary to-purple-600 rounded-md flex items-center justify-center">
                <span className="font-heading font-bold text-white">P</span>
              </div>
              <span className="font-heading font-bold text-xl">Pixel Edu</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Gamified learning platform for IT, Web3, blockchain, and the Metaverse with token rewards.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-heading font-bold">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/token" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    $PUR Token
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-bold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#team"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#partnerships"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-bold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Pixel Edu. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Button variant="link" size="sm" asChild className="text-xs text-muted-foreground">
              <Link href="/terms">Terms</Link>
            </Button>
            <Button variant="link" size="sm" asChild className="text-xs text-muted-foreground">
              <Link href="/privacy">Privacy</Link>
            </Button>
            <Button variant="link" size="sm" asChild className="text-xs text-muted-foreground">
              <Link href="/cookies">Cookies</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
