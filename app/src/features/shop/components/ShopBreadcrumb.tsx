import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { ROUTES } from "@/constants/routes"

/**
 * Subtle route context sitting above the shop hero — "Home / Shop All".
 * Purely presentational, no dependency on filter state.
 */
export function ShopBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/35">
        <li>
          <Link to={ROUTES.home} className="transition hover:text-white/70">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="flex items-center">
          <ChevronRight size={12} />
        </li>
        <li aria-current="page" className="text-white/60">
          Shop All
        </li>
      </ol>
    </nav>
  )
}