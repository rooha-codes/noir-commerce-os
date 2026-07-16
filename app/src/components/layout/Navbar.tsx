import { Heart, Menu, Search, ShoppingBag } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { ROUTES } from "@/constants/routes"
import { useCart } from "@/features/cart/hooks/useCart"
import { useUIStore } from "@/store/ui-store"

const navLinks = [
  { label: "Shop", href: ROUTES.shop },
  { label: "Collections", href: ROUTES.collections },
  { label: "About", href: ROUTES.about },
  { label: "Journal", href: ROUTES.journal },
] as const

export function Navbar() {
  const { count, openCart } = useCart()
  const { openSearch, openMobileMenu } = useUIStore()

  return (
    <nav
      className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl md:px-10"
      aria-label="Main navigation"
    >
      <Link
        className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        to={ROUTES.home}
      >
        NOIR®
      </Link>

      <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/70 md:flex">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            className={({ isActive }) =>
              cn(
                "transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                isActive ? "text-white" : "",
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={openSearch}
          aria-label="Search"
          className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        >
          <Search size={19} />
        </button>

        <button
          aria-label="Wishlist"
          className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        >
          <Heart size={19} />
        </button>

        <button
          onClick={openCart}
          aria-label="Open cart"
          className="relative transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        >
          <ShoppingBag size={19} />
          {count() > 0 && (
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-white text-[10px] font-bold text-black">
              {count()}
            </span>
          )}
        </button>

        <button
          onClick={openMobileMenu}
          aria-label="Open menu"
          className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 md:hidden"
        >
          <Menu size={21} />
        </button>
      </div>
    </nav>
  )
}

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

export default Navbar