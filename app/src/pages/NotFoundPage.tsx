import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

import { RootLayout } from "@/components/layout/RootLayout"
import { Seo } from "@/components/seo/Seo"
import { Container } from "@/components/ui/Container"
import { ROUTES } from "@/constants/routes"

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | NOIR Commerce"
        description="The requested page does not exist or may have been moved."
        noIndex
      />

      <RootLayout navbar="home">
        <Container
          size="narrow"
          className="grid min-h-screen place-items-center py-28 text-center"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/40">
              Error 404
            </p>

            <h1 className="mb-6 text-5xl font-medium tracking-tighter md:text-7xl">
              Page not found.
            </h1>

            <p className="mx-auto mb-10 max-w-md text-white/50">
              The page you are looking for does not exist or may have
              been moved.
            </p>

            <Link
              to={ROUTES.HOME}
              className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 text-button font-medium uppercase text-primary-foreground transition-transform duration-normal ease-standard hover:scale-[1.01] active:scale-[0.99]"
            >
              <ArrowLeft size={17} />
              Back to Home
            </Link>
          </div>
        </Container>
      </RootLayout>
    </>
  )
}

export default NotFoundPage