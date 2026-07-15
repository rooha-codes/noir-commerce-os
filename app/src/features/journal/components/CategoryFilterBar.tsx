import { cn } from "@/utils/cn"
import { ALL_JOURNAL_CATEGORY } from "@/features/journal/types"

type CategoryFilterBarProps = {
  categories: string[]
  active: string
  onSelect: (category: string) => void
}

/**
 * Self-contained category pill row for the journal grid. Deliberately not
 * shared with the shop feature's `CategoryPills` — each feature owns its
 * own small presentational filter control rather than reaching across
 * feature boundaries for a few lines of markup.
 */
export function CategoryFilterBar({ categories, active, onSelect }: CategoryFilterBarProps) {
  const options = [ALL_JOURNAL_CATEGORY, ...categories]

  return (
    <div
      role="group"
      aria-label="Filter articles by category"
      className="-mx-5 mb-12 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
    >
      {options.map((category) => {
        const isActive = category === active

        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(category)}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors duration-normal ease-standard",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-white/60 hover:border-border-strong hover:text-white",
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}