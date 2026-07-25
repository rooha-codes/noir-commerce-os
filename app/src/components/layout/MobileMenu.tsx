import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useAuth } from "@/features/auth"
import { ROUTES } from "@/constants/routes"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { isAuthenticated } = useAuth()

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              to={ROUTES.SHOP}
              onClick={() => setOpen(false)}
              className="text-body text-foreground"
            >
              Shop
            </Link>
            <Link
              to={ROUTES.COLLECTIONS}
              onClick={() => setOpen(false)}
              className="text-body text-foreground"
            >
              Collections
            </Link>
            <Link
              to={ROUTES.ABOUT}
              onClick={() => setOpen(false)}
              className="text-body text-foreground"
            >
              About
            </Link>
            <Link
              to={ROUTES.JOURNAL}
              onClick={() => setOpen(false)}
              className="text-body text-foreground"
            >
              Journal
            </Link>
            <Link
              to={ROUTES.CART}
              onClick={() => setOpen(false)}
              className="text-body text-foreground"
            >
              Cart
            </Link>
            {isAuthenticated ? (
              <Link
                to={ROUTES.ACCOUNT}
                onClick={() => setOpen(false)}
                className="text-body text-foreground"
              >
                Account
              </Link>
            ) : (
              <Link
                to={ROUTES.LOGIN}
                onClick={() => setOpen(false)}
                className="text-body text-foreground"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </>
  )
}