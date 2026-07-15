import { Link } from "react-router-dom"
import { ROUTES } from "@/constants/routes"
import type { Product } from "@/types/product"

type SearchResultItemProps = {
  product: Product
  onSelect: () => void
}

export function SearchResultItem({ product, onSelect }: SearchResultItemProps) {
  return (
    <Link
      to={ROUTES.product(product.slug)}
      onClick={onSelect}
      className="group flex items-center gap-4 rounded-sm p-3 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
    >
      <div className="h-20 w-16 shrink-0 overflow-hidden bg-white/5">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-normal group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          {product.category}
        </p>
        <p className="text-sm font-medium text-white/90">{product.name}</p>
        <p className="text-sm text-white/50">${product.price}</p>
      </div>
    </Link>
  )
}