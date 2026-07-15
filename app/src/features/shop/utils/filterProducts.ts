import type { Product } from "@/types/product"
import type { ShopFilters, SortOption } from "@/features/shop/types"
import { ALL_CATEGORY } from "@/features/shop/types"
import { getPriceRangeById } from "@/features/shop/utils/priceRanges"

/** Derives the unique, alphabetised list of categories present in the catalog. */
export function getCategoriesFromProducts(products: readonly Product[]): string[] {
  const unique = new Set(products.map((product) => product.category))
  return Array.from(unique).sort((a, b) => a.localeCompare(b))
}

/** Builds a stable id -> catalog-position lookup, used for "Featured"/"Newest" sorting. */
export function buildOrderIndex(products: readonly Product[]): Map<string, number> {
  const index = new Map<string, number>()
  products.forEach((product, position) => {
    index.set(product.id, position)
  })
  return index
}

export function matchesSearch(product: Product, query: string): boolean {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return true

  return (
    product.name.toLowerCase().includes(normalized) ||
    product.category.toLowerCase().includes(normalized) ||
    product.description.toLowerCase().includes(normalized)
  )
}

export function matchesCategory(product: Product, category: string): boolean {
  return category === ALL_CATEGORY || product.category === category
}

export function matchesPriceRange(product: Product, priceRangeId: string | null): boolean {
  const range = getPriceRangeById(priceRangeId)
  if (!range) return true

  const withinMin = product.price >= range.min
  const withinMax = range.max === null || product.price < range.max
  return withinMin && withinMax
}

export function sortProducts(
  products: readonly Product[],
  sort: SortOption,
  orderIndex: Map<string, number>,
): Product[] {
  const sorted = [...products]

  switch (sort) {
    case "featured":
      return sorted.sort(
        (a, b) => (orderIndex.get(a.id) ?? 0) - (orderIndex.get(b.id) ?? 0),
      )
    case "newest":
      // No `createdAt` field exists on Product, so "Newest" is treated as the
      // reverse of catalog order (later entries in data/products.ts are
      // assumed to be the most recently added arrivals).
      return sorted.sort(
        (a, b) => (orderIndex.get(b.id) ?? 0) - (orderIndex.get(a.id) ?? 0),
      )
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price)
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price)
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return sorted
  }
}

export function applyShopFilters(
  products: readonly Product[],
  filters: ShopFilters,
  orderIndex: Map<string, number>,
): Product[] {
  const filtered = products.filter(
    (product) =>
      matchesSearch(product, filters.search) &&
      matchesCategory(product, filters.category) &&
      matchesPriceRange(product, filters.priceRangeId),
  )

  return sortProducts(filtered, filters.sort, orderIndex)
}