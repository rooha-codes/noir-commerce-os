import { SearchX } from "lucide-react"
import type { Product } from "../../../types/product"
import { ProductCard } from "../../../components/commerce/ProductCard"
import { EmptyState } from "../../../components/ui/EmptyState"
import { ClearFiltersButton } from "./ClearFiltersButton"
type ProductGridProps = {
  products: Product[]
  onClearFilters: () => void
}

/**
 * Renders the existing `ProductCard` unchanged — Batch 2 only owns the
 * surrounding grid, not card behavior — falling back to an empty state
 * with a one-tap way back to the unfiltered catalog.
 */
export function ProductGrid({ products, onClearFilters }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        icon={<SearchX size={40} />}
        title="No products match your filters"
        description="Try a different search term, or clear your filters to see the full collection."
        action={<ClearFiltersButton onClick={onClearFilters} />}
      />
    )
  }

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}