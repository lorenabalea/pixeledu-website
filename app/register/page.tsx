import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Wallet } from "lucide-react"

export const metadata: Metadata = {
  title: "Register | Pixel Edu",
  description: "Create a new Pixel Edu account",
}

export default function RegisterPage() {
  return (
    <div className="container flex items-center justify-center min-h-[80vh] py-12">
      <div className="w-full max-w-md">
        <Card className="light-mode-card border-primary/10">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-heading">Create an account</CardTitle>
            <CardDescription>Join our community of Web3 learners</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="wallet">Web3 Wallet</TabsTrigger>
              </TabsList>
              <TabsContent value="email" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input placeholder="First Name" className="bg-background/50 border-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Last Name" className="bg-background/50 border-primary/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="name@example.com" className="bg-background/50 border-primary/20" />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Create a password"
                    className="bg-background/50 border-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    className="bg-background/50 border-primary/20"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      privacy policy
                    </Link>
                  </label>
                </div>
                <Button className="w-full font-heading">Create Account</Button>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-primary/10"></span>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-card px-2 text-muted-foreground">or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="wallet" className="space-y-4">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wallet className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Connect your Web3 wallet to create an account and start earning $PUR tokens
                  </p>
                </div>
                <Button className="w-full font-heading">Connect Wallet</Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 33 32" fill="none">
                      <path
                        d="M16.0445 0C7.1736 0 0 7.17107 0 16.0445C0 24.9179 7.1736 32.089 16.0445 32.089C24.9154 32.089 32.089 24.9179 32.089 16.0445C32.089 7.17107 24.9179 0 16.0445 0ZM16.0445 30.2384C8.19483 30.2384 1.85057 23.8941 1.85057 16.0445C1.85057 8.19483 8.19483 1.85057 16.0445 1.85057C23.8941 1.85057 30.2384 8.19483 30.2384 16.0445C30.2384 23.8941 23.8941 30.2384 16.0445 30.2384Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.0445 6.01432C10.4779 6.01432 6.01432 10.4779 6.01432 16.0445C6.01432 21.6111 10.4779 26.0747 16.0445 26.0747C21.6111 26.0747 26.0747 21.6111 26.0747 16.0445C26.0747 10.4779 21.6111 6.01432 16.0445 6.01432ZM16.0445 24.2241C11.4996 24.2241 7.86489 20.5894 7.86489 16.0445C7.86489 11.4996 11.4996 7.86489 16.0445 7.86489C20.5894 7.86489 24.2241 11.4996 24.2241 16.0445C24.2241 20.5894 20.5894 24.2241 16.0445 24.2241Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.0445 12.0352C13.8331 12.0352 12.0352 13.8331 12.0352 16.0445C12.0352 18.2559 13.8331 20.0538 16.0445 20.0538C18.2559 20.0538 20.0538 18.2559 20.0538 16.0445C20.0538 13.8331 18.2559 12.0352 16.0445 12.0352ZM16.0445 18.2032C14.8547 18.2032 13.8858 17.2343 13.8858 16.0445C13.8858 14.8547 14.8547 13.8858 16.0445 13.8858C17.2343 13.8858 18.2032 14.8547 18.2032 16.0445C18.2032 17.2343 17.2343 18.2032 16.0445 18.2032Z"
                        fill="currentColor"
                      />
                    </svg>
                    MetaMask
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104z" />
                      <path d="M415.5 128h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
                      <path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z" />
                    </svg>
                    Phantom
                  </Button>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox id="terms-wallet" />
                  <label
                    htmlFor="terms-wallet"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      privacy policy
                    </Link>
                  </label>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
