import { Link } from "react-router-dom"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { SITE } from "@/constants/site"

export function ProductNavbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/50 px-5 py-4 backdrop-blur-xl md:px-10">
      <Link to="/" className="flex items-center gap-3 text-sm text-white/70">
        <ArrowLeft size={18} /> Back
      </Link>
      <Link to="/" className="text-xl font-semibold tracking-tight">
        {SITE.name}
      </Link>
      <button className="relative">
        <ShoppingBag size={19} />
      </button>
    </nav>
  )
}
