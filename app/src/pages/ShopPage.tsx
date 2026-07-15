import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { useProducts } from "@/features/products"
import {
  useShopFilters,
  ShopHero,
  ShopBreadcrumb,
  ShopToolbar,
  CategoryPills,
  FilterSidebar,
  MobileFilterSheet,
  ProductGrid,
} from "@/features/shop"

export function ShopPage() {
  const allProducts = useProducts()
  const {
    filters,
    setSearch,
    setCategory,
    setPriceRangeId,
    setSort,
    clearFilters,
    isFiltered,
    categories,
    priceRanges,
    products,
    resultsCount,
    totalCount,
    isMobileFiltersOpen,
    openMobileFilters,
    closeMobileFilters,
  } = useShopFilters(allProducts)

  return (
    <RootLayout navbar="home" showFooter>
      <Section spacing="lg" className="pt-32">
        <Container>
          <ShopBreadcrumb />
          <ShopHero totalCount={totalCount} />

          <CategoryPills
            categories={categories}
            active={filters.category}
            onSelect={setCategory}
          />

          <ShopToolbar
            search={filters.search}
            onSearchChange={setSearch}
            sort={filters.sort}
            onSortChange={setSort}
            resultsCount={resultsCount}
            totalCount={totalCount}
            onOpenMobileFilters={openMobileFilters}
          />

          <div className="flex gap-10">
            <FilterSidebar
              categories={categories}
              activeCategory={filters.category}
              onSelectCategory={setCategory}
              priceRanges={priceRanges}
              selectedPriceRangeId={filters.priceRangeId}
              onSelectPriceRange={setPriceRangeId}
              isFiltered={isFiltered}
              onClearFilters={clearFilters}
            />

            <div className="min-w-0 flex-1">
              <ProductGrid products={products} onClearFilters={clearFilters} />
            </div>
          </div>
        </Container>
      </Section>

      <MobileFilterSheet
        isOpen={isMobileFiltersOpen}
        onClose={closeMobileFilters}
        categories={categories}
        activeCategory={filters.category}
        onSelectCategory={setCategory}
        priceRanges={priceRanges}
        selectedPriceRangeId={filters.priceRangeId}
        onSelectPriceRange={setPriceRangeId}
        resultsCount={resultsCount}
        onClearFilters={clearFilters}
      />

      <CartDrawer />
    </RootLayout>
  )
}

export default ShopPage