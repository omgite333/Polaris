import { ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SignInButton } from "@clerk/nextjs"

export default function UnauthenticatedView() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="max-w-md rounded-2xl shadow-xl border-muted">
        <CardContent className="flex flex-col items-center gap-5 p-8 text-center">
          <div className="rounded-full bg-destructive/10 p-4">
            <ShieldAlert className="h-10 w-10 text-destructive" />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight">
            Access Restricted
          </h1>

          <p className="text-muted-foreground text-sm leading-relaxed">
            You must be signed in to view this content. Please login to continue
            and access your dashboard securely.
          </p>

          <SignInButton>
            <Button size="lg" className="rounded-xl px-8">
              Sign In 
            </Button>
          </SignInButton>
        </CardContent>
      </Card>
    </div>
  )
}