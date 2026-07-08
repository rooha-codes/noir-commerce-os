import { ShoppingBag } from "lucide-react"
import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { ProductCard } from "@/components/commerce/ProductCard"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { EmptyState } from "@/components/ui/EmptyState"
import { useProducts } from "@/features/products"

export function ShopPage() {
  const products = useProducts()

  return (
    <RootLayout navbar="home" showFooter>
      <Section spacing="lg" className="pt-32">
        <Container>
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
              Full Collection
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Shop All
            </h1>
          </div>

          {products.length === 0 ? (
            <EmptyState
              icon={<ShoppingBag size={40} />}
              title="No products available"
              description="Check back soon for new arrivals."
            />
          ) : (
            <div className="grid gap-5 md:grid-cols-4">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CartDrawer />
    </RootLayout>
  )
}

export default ShopPage