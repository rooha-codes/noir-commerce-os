import type { PriceRange } from "@/features/shop/types"
import { cn } from "@/utils/cn"

type PriceRangeGroupProps = {
  ranges: readonly PriceRange[]
  selectedId: string | null
  onSelect: (id: string | null) => void
}

/**
 * Single-select price bucket list. Selecting the already-active range
 * clears it, so there's always an easy way back to "any price" without a
 * separate reset control.
 */
export function PriceRangeGroup({ ranges, selectedId, onSelect }: PriceRangeGroupProps) {
  return (
    <div role="radiogroup" aria-label="Filter by price" className="flex flex-col gap-1.5">
      {ranges.map((range) => {
        const isSelected = range.id === selectedId

        return (
          <button
            key={range.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(isSelected ? null : range.id)}
            className={cn(
              "flex items-center gap-3 rounded-sm px-2 py-2 text-left text-body-sm transition-colors duration-normal ease-standard",
              isSelected ? "text-foreground" : "text-muted hover:text-foreground",
            )}
          >
            <span
              className={cn(
                "grid h-4 w-4 shrink-0 place-items-center rounded-full border transition-colors duration-normal ease-standard",
                isSelected ? "border-primary" : "border-border-strong",
              )}
            >
              {isSelected && <span className="h-2 w-2 rounded-full bg-primary" />}
            </span>
            {range.label}
          </button>
        )
      })}
    </div>
  )
}