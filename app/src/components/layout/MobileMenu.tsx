import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { X, ShoppingBag, Heart } from "lucide-react"
import { ROUTES } from "@/constants/routes"
import { useUIStore } from "@/store/ui-store"
import { useCart } from "@/features/cart/hooks/useCart"
import { useWishlist } from "@/features/wishlist"
import { cn } from "@/utils/cn"

const menuLinks = [
  { label: "Home", href: ROUTES.home },
  { label: "Shop", href: ROUTES.shop },
  { label: "Collections", href: ROUTES.collections },
  { label: "Journal", href: ROUTES.journal },
  { label: "About", href: ROUTES.about },
  { label: "Cart", href: ROUTES.cart },
  { label: "Wishlist", href: "/wishlist" },
] as const

export function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useUIStore()
  const { count: cartCount, openCart } = useCart()
  const { count: wishlistCount } = useWishlist()
  const location = useLocation()

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
    return undefined
  }, [isMobileMenuOpen, closeMobileMenu])

  useEffect(() => {
    closeMobileMenu()
  }, [location.pathname, closeMobileMenu])

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.button
            aria-label="Close menu overlay"
            onClick={closeMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-80 bg-black/80 backdrop-blur-sm md:hidden"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed right-0 top-0 z-90 flex h-screen w-full max-w-105 flex-col border-l border-white/10 bg-[#080808] text-white shadow-2xl md:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <span className="text-xl font-semibold tracking-tight">
                NOIR®
              </span>

              <div className="flex items-center gap-3">
                <Link
                  to="/wishlist"
                  onClick={closeMobileMenu}
                  aria-label="Wishlist"
                  className="relative grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
                >
                  <Heart size={18} />
                  {wishlistCount() > 0 && (
                    <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-white text-[9px] font-bold text-black">
                      {wishlistCount()}
                    </span>
                  )}
                </Link>

                <button
                  onClick={() => {
                    closeMobileMenu()
                    openCart()
                  }}
                  aria-label="Open cart"
                  className="relative grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
                >
                  <ShoppingBag size={18} />
                  {cartCount() > 0 && (
                    <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-white text-[9px] font-bold text-black">
                      {cartCount()}
                    </span>
                  )}
                </button>

                <button
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-6 py-8">
              {menuLinks.map((link) => {
                const isActive = location.pathname === link.href

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "border-b border-white/5 py-4 text-2xl tracking-tight text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                      isActive && "text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="border-t border-white/10 px-6 py-6 text-xs uppercase tracking-[0.3em] text-white/40">
              Minimal. Essential. Timeless.
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}