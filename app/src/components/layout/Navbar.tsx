import { Link } from "react-router-dom"
import { useAuth } from "@/features/auth"
import { ROUTES } from "@/constants/routes"
import { MobileMenu } from "./MobileMenu"

export function Navbar() {
  const { isAuthenticated } = useAuth()

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:px-10">
        <Link
          to={ROUTES.HOME}
          className="text-label uppercase tracking-widest text-foreground transition-opacity duration-normal hover:opacity-70"
        >
          NOIR
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            to={ROUTES.SHOP}
            className="text-body-sm text-muted transition-colors duration-normal hover:text-foreground"
          >
            Shop
          </Link>
          <Link
            to={ROUTES.COLLECTIONS}
            className="text-body-sm text-muted transition-colors duration-normal hover:text-foreground"
          >
            Collections
          </Link>
          <Link
            to={ROUTES.ABOUT}
            className="text-body-sm text-muted transition-colors duration-normal hover:text-foreground"
          >
            About
          </Link>
          <Link
            to={ROUTES.JOURNAL}
            className="text-body-sm text-muted transition-colors duration-normal hover:text-foreground"
          >
            Journal
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link
            to={ROUTES.CART}
            className="hidden text-body-sm text-muted transition-colors duration-normal hover:text-foreground md:block"
          >
            Cart
          </Link>
          {isAuthenticated ? (
            <Link
              to={ROUTES.ACCOUNT}
              className="text-body-sm text-foreground transition-colors duration-normal hover:text-primary"
            >
              Account
            </Link>
          ) : (
            <Link
              to={ROUTES.LOGIN}
              className="text-body-sm text-foreground transition-colors duration-normal hover:text-primary"
            >
              Login
            </Link>
          )}
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}