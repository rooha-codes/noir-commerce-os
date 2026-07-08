import { useMemo } from "react"
import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { ProductCard } from "@/components/commerce/ProductCard"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { useProducts } from "@/features/products"
import type { Product } from "@/types/product"

function groupByCategory(products: Product[]): Map<string, Product[]> {
  const groups = new Map<string, Product[]>()

  for (const product of products) {
    const existing = groups.get(product.category)
    if (existing) {
      existing.push(product)
    } else {
      groups.set(product.category, [product])
    }
  }

  return groups
}

export function CollectionsPage() {
  const products = useProducts()
  const grouped = useMemo(() => groupByCategory(products), [products])

  return (
    <RootLayout navbar="home" showFooter>
      <Section spacing="lg" className="pt-32">
        <Container>
          <div className="mb-14">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
              Curated By Category
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Collections
            </h1>
          </div>

          <div className="flex flex-col gap-20">
            {Array.from(grouped.entries()).map(([category, items]) => (
              <div key={category}>
                <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-5">
                  <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {category}
                  </h2>
                  <span className="text-sm text-white/40">
                    {items.length} {items.length === 1 ? "piece" : "pieces"}
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-4">
                  {items.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CartDrawer />
    </RootLayout>
  )
}

export default CollectionsPage