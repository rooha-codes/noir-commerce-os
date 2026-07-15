import { useCallback, useMemo, useState } from "react"
import type { Product } from "@/types/product"
import type { PriceRange, ShopFilters, SortOption } from "@/features/shop/types"
import { ALL_CATEGORY, DEFAULT_SHOP_FILTERS } from "@/features/shop/types"
import { PRICE_RANGES } from "@/features/shop/utils/priceRanges"
import {
  applyShopFilters,
  buildOrderIndex,
  getCategoriesFromProducts,
} from "@/features/shop/utils/filterProducts"

export type UseShopFiltersResult = {
  filters: ShopFilters
  setSearch: (search: string) => void
  setCategory: (category: string) => void
  setPriceRangeId: (priceRangeId: string | null) => void
  setSort: (sort: SortOption) => void
  clearFilters: () => void
  isFiltered: boolean
  categories: string[]
  priceRanges: readonly PriceRange[]
  products: Product[]
  resultsCount: number
  totalCount: number
  isMobileFiltersOpen: boolean
  openMobileFilters: () => void
  closeMobileFilters: () => void
}

export function useShopFilters(allProducts: Product[]): UseShopFiltersResult {
  const [filters, setFilters] = useState<ShopFilters>(DEFAULT_SHOP_FILTERS)
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  const categories = useMemo(() => getCategoriesFromProducts(allProducts), [allProducts])
  const orderIndex = useMemo(() => buildOrderIndex(allProducts), [allProducts])

  const products = useMemo(
    () => applyShopFilters(allProducts, filters, orderIndex),
    [allProducts, filters, orderIndex],
  )

  const setSearch = useCallback((search: string) => {
    setFilters((previous) => ({ ...previous, search }))
  }, [])

  const setCategory = useCallback((category: string) => {
    setFilters((previous) => ({ ...previous, category }))
  }, [])

  const setPriceRangeId = useCallback((priceRangeId: string | null) => {
    setFilters((previous) => ({ ...previous, priceRangeId }))
  }, [])

  const setSort = useCallback((sort: SortOption) => {
    setFilters((previous) => ({ ...previous, sort }))
  }, [])

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_SHOP_FILTERS)
  }, [])

  const openMobileFilters = useCallback(() => setIsMobileFiltersOpen(true), [])
  const closeMobileFilters = useCallback(() => setIsMobileFiltersOpen(false), [])

  const isFiltered =
    filters.search.trim() !== "" ||
    filters.category !== ALL_CATEGORY ||
    filters.priceRangeId !== null

  return {
    filters,
    setSearch,
    setCategory,
    setPriceRangeId,
    setSort,
    clearFilters,
    isFiltered,
    categories,
    priceRanges: PRICE_RANGES,
    products,
    resultsCount: products.length,
    totalCount: allProducts.length,
    isMobileFiltersOpen,
    openMobileFilters,
    closeMobileFilters,
  }
}