import type { PriceRange } from "@/features/shop/types"

/**
 * Static, frontend-only price buckets. There's no pricing/catalog service
 * to derive these from, so the ranges are chosen to spread the current
 * catalog ($85–$420) evenly while staying round and readable. `max` is
 * exclusive except for the final "and up" bucket, so buckets never overlap.
 */
export const PRICE_RANGES: readonly PriceRange[] = [
  { id: "under-100", label: "Under $100", min: 0, max: 100 },
  { id: "100-200", label: "$100 – $200", min: 100, max: 200 },
  { id: "200-400", label: "$200 – $400", min: 200, max: 400 },
  { id: "400-plus", label: "$400 & Up", min: 400, max: null },
]

export function getPriceRangeById(id: string | null): PriceRange | undefined {
  if (!id) return undefined
  return PRICE_RANGES.find((range) => range.id === id)
}