import { cn } from "@/utils/cn"
import { ALL_CATEGORY } from "@/features/shop/types"

type CategoryPillsProps = {
  categories: string[]
  active: string
  onSelect: (category: string) => void
}

/**
 * Quick top-of-page category switch. Scrolls horizontally on small
 * viewports instead of wrapping, so it never fights the toolbar for space.
 */
export function CategoryPills({ categories, active, onSelect }: CategoryPillsProps) {
  const options = [ALL_CATEGORY, ...categories]

  return (
    <div
      role="group"
      aria-label="Filter by category"
      className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
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