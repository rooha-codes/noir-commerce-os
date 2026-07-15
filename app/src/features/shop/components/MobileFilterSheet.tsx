import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ALL_CATEGORY } from "@/features/shop/types"
import type { PriceRange } from "@/features/shop/types"
import { PriceRangeGroup } from "@/features/shop/components/PriceRangeGroup"
import { cn } from "@/utils/cn"

type MobileFilterSheetProps = {
  isOpen: boolean
  onClose: () => void
  categories: string[]
  activeCategory: string
  onSelectCategory: (category: string) => void
  priceRanges: readonly PriceRange[]
  selectedPriceRangeId: string | null
  onSelectPriceRange: (id: string | null) => void
  resultsCount: number
  onClearFilters: () => void
}

/**
 * Mobile/tablet equivalent of `FilterSidebar`. Same category + price
 * controls, presented as a bottom sheet consistent with `CartDrawer`'s
 * overlay + slide-in pattern (fixed overlay, `z-[80]`/`z-[90]`, backdrop
 * blur) rather than introducing a new modal pattern.
 */
export function MobileFilterSheet({
  isOpen,
  onClose,
  categories,
  activeCategory,
  onSelectCategory,
  priceRanges,
  selectedPriceRangeId,
  onSelectPriceRange,
  resultsCount,
  onClearFilters,
}: MobileFilterSheetProps) {
  const options = [ALL_CATEGORY, ...categories]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            aria-label="Close filters overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm lg:hidden"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Filter products"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 z-[90] flex max-h-[85vh] flex-col rounded-t-2xl border-t border-white/10 bg-[#080808] text-white shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Refine
                </p>
                <h2 className="mt-1 text-2xl font-medium">Filters</h2>
              </div>

              <button
                onClick={onClose}
                aria-label="Close filters"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              <div className="mb-6">
                <h3 className="mb-3 text-label uppercase text-muted">Category</h3>
                <div
                  role="radiogroup"
                  aria-label="Filter by category"
                  className="flex flex-wrap gap-2"
                >
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
                          "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors duration-normal ease-standard",
                          isActive
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-white/60",
                        )}
                      >
                        {category}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-label uppercase text-muted">Price</h3>
                <PriceRangeGroup
                  ranges={priceRanges}
                  selectedId={selectedPriceRangeId}
                  onSelect={onSelectPriceRange}
                />
              </div>
            </div>

            <div className="flex gap-3 border-t border-white/10 p-6">
              <Button variant="secondary" fullWidth onClick={onClearFilters}>
                Clear
              </Button>
              <Button variant="primary" fullWidth onClick={onClose}>
                Show {resultsCount} {resultsCount === 1 ? "Result" : "Results"}
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}