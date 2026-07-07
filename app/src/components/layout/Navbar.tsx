import { Heart, Menu, Search, ShoppingBag } from "lucide-react"
import { SITE, NAV_LINKS } from "@/constants/site"
import { IconButton } from "@/components/ui/IconButton"
import { useCart } from "@/features/cart"

export function Navbar() {
  const { count, openCart } = useCart()

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl md:px-10">
      <a className="text-xl font-semibold tracking-tight" href="/">
        {SITE.name}
      </a>

      <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/70 md:flex">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <IconButton label="Search">
          <Search size={19} />
        </IconButton>

        <IconButton label="Wishlist">
          <Heart size={19} />
        </IconButton>

        <IconButton
          onClick={openCart}
          label="Open cart"
          className="relative"
        >
          <ShoppingBag size={19} />
          {count() > 0 && (
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-white text-[10px] font-bold text-black">
              {count()}
            </span>
          )}
        </IconButton>

        <IconButton label="Open menu">
          <Menu size={21} />
        </IconButton>
      </div>
    </nav>
  )
}
