import { cn } from "@/utils/cn"
import { Divider } from "@/components/ui/Divider"
import { ALL_CATEGORY } from "@/features/shop/types"
import type { PriceRange } from "@/features/shop/types"
import { PriceRangeGroup } from "@/features/shop/components/PriceRangeGroup"
import { ClearFiltersButton } from "@/features/shop/components/ClearFiltersButton"

type FilterSidebarProps = {
  categories: string[]
  activeCategory: string
  onSelectCategory: (category: string) => void
  priceRanges: readonly PriceRange[]
  selectedPriceRangeId: string | null
  onSelectPriceRange: (id: string | null) => void
  isFiltered: boolean
  onClearFilters: () => void
}

/**
 * Desktop-only refinement panel. Hidden below `lg`, where the mobile
 * filter sheet takes over the same category/price controls.
 */
export function FilterSidebar({
  categories,
  activeCategory,
  onSelectCategory,
  priceRanges,
  selectedPriceRangeId,
  onSelectPriceRange,
  isFiltered,
  onClearFilters,
}: FilterSidebarProps) {
  const options = [ALL_CATEGORY, ...categories]

  return (
    <aside className="hidden shrink-0 lg:block lg:w-64">
      <div className="sticky top-32">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/40">Filters</h2>
          {isFiltered && (
            <ClearFiltersButton onClick={onClearFilters} className="h-auto px-0 border-none" />
          )}
        </div>

        <div>
          <h3 className="mb-3 text-label uppercase text-muted">Category</h3>
          <div role="radiogroup" aria-label="Filter by category" className="flex flex-col gap-1">
            {options.map((category) => {
              const isActive = category === activeCategory

              return (
                <button
                  key={category}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => onSelectCategory(category)}
                  className={cn(
                    "rounded-sm px-2 py-2 text-left text-body-sm transition-colors duration-normal ease-standard",
                    isActive
                      ? "bg-white/5 text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        <Divider className="my-6" />

        <div>
          <h3 className="mb-3 text-label uppercase text-muted">Price</h3>
          <PriceRangeGroup
            ranges={priceRanges}
            selectedId={selectedPriceRangeId}
            onSelect={onSelectPriceRange}
          />
        </div>
      </div>
    </aside>
  )
}