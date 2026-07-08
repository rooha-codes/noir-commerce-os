import { Link } from "react-router-dom"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { useCart } from "@/features/cart/hooks/useCart"

export function ProductNavbar() {
  const { count, openCart } = useCart()

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/50 px-5 py-4 backdrop-blur-xl md:px-10">
      <Link to="/" className="flex items-center gap-3 text-sm text-white/70">
        <ArrowLeft size={18} /> Back
      </Link>

      <Link to="/" className="text-xl font-semibold tracking-tight">
        NOIR®
      </Link>

      <button onClick={openCart} aria-label="Open cart" className="relative">
        <ShoppingBag size={19} />
        {count() > 0 && (
          <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-white text-[10px] font-bold text-black">
            {count()}
          </span>
        )}
      </button>
    </nav>
  )
}

export default ProductNavbar