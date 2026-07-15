/**
 * Sprint 3 · Batch 2 — Shop feature types.
 *
 * Kept local to `features/shop` since none of this is needed by
 * ProductPage, HomePage, or the cart — it only describes how the /shop
 * grid is searched, filtered, and sorted on the client.
 */

/** Sentinel category value meaning "no category filter applied". */
export const ALL_CATEGORY = "All"

export type SortOption =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "name-asc"

export const SORT_OPTIONS: ReadonlyArray<{ value: SortOption; label: string }> = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" },
]

export function isSortOption(value: string): value is SortOption {
  return SORT_OPTIONS.some((option) => option.value === value)
}

/** Frontend-only price bucket. `max: null` means "and up". */
export type PriceRange = {
  id: string
  label: string
  min: number
  max: number | null
}

export type ShopFilters = {
  search: string
  category: string
  priceRangeId: string | null
  sort: SortOption
}

export const DEFAULT_SHOP_FILTERS: ShopFilters = {
  search: "",
  category: ALL_CATEGORY,
  priceRangeId: null,
  sort: "featured",
}