import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Select } from "@/components/ui/Select"
import { SORT_OPTIONS, isSortOption } from "@/features/shop/types"
import type { SortOption } from "@/features/shop/types"
import { SearchInput } from "@/features/shop/components/SearchInput"

type ShopToolbarProps = {
  search: string
  onSearchChange: (value: string) => void
  sort: SortOption
  onSortChange: (value: SortOption) => void
  resultsCount: number
  totalCount: number
  onOpenMobileFilters: () => void
}

export function ShopToolbar({
  search,
  onSearchChange,
  sort,
  onSortChange,
  resultsCount,
  totalCount,
  onOpenMobileFilters,
}: ShopToolbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-y border-border py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={onOpenMobileFilters}
          leftIcon={<SlidersHorizontal size={14} />}
          className="lg:hidden"
        >
          Filters
        </Button>

        <p aria-live="polite" className="text-body-sm text-muted">
          {resultsCount} of {totalCount} {totalCount === 1 ? "piece" : "pieces"}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SearchInput value={search} onChange={onSearchChange} />

        <Select
          aria-label="Sort products"
          value={sort}
          onChange={(event) => {
            const { value } = event.target
            if (isSortOption(value)) onSortChange(value)
          }}
          options={SORT_OPTIONS.map((option) => ({
            label: option.label,
            value: option.value,
          }))}
          className="sm:w-56"
        />
      </div>
    </div>
  )
}