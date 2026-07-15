export { useShopFilters } from "@/features/shop/hooks/useShopFilters"
export type { UseShopFiltersResult } from "@/features/shop/hooks/useShopFilters"

export { ShopHero } from "@/features/shop/components/ShopHero"
export { ShopBreadcrumb } from "@/features/shop/components/ShopBreadcrumb"
export { ShopToolbar } from "@/features/shop/components/ShopToolbar"
export { CategoryPills } from "@/features/shop/components/CategoryPills"
export { FilterSidebar } from "@/features/shop/components/FilterSidebar"
export { MobileFilterSheet } from "@/features/shop/components/MobileFilterSheet"
export { ProductGrid } from "@/features/shop/components/ProductGrid"
export { ClearFiltersButton } from "@/features/shop/components/ClearFiltersButton"
export { SearchInput } from "@/features/shop/components/SearchInput"
export { PriceRangeGroup } from "@/features/shop/components/PriceRangeGroup"

export type {
  ShopFilters,
  SortOption,
  PriceRange,
} from "@/features/shop/types"
export { ALL_CATEGORY, SORT_OPTIONS, DEFAULT_SHOP_FILTERS } from "@/features/shop/types"
export { PRICE_RANGES } from "@/features/shop/utils/priceRanges"