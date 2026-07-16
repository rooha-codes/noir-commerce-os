import { useEffect, lazy, Suspense } from "react"
import { useNavigate } from "react-router-dom"
import { RootLayout } from "@/components/layout/RootLayout"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { useCart } from "@/features/cart"
import { useProductBySlug } from "@/features/products/hooks/useProductBySlug"
import { ProductGallery } from "@/features/products/components/ProductGallery"
import { ProductInfo } from "@/features/products/components/ProductInfo"
import { RelatedProducts } from "@/features/products/components/RelatedProducts"
import { products } from "@/data/products"
import { ROUTES } from "@/constants/routes"

const ProductReviews = lazy(() =>
  import("@/features/reviews/components/ProductReviews").then((m) => ({
    default: m.ProductReviews,
  })),
)

const RecentlyViewed = lazy(() =>
  import("@/features/products/components/RecentlyViewed").then((m) => ({
    default: m.RecentlyViewed,
  })),
)

function SectionLoader() {
  return (
    <div className="border-t border-white/10 pt-16">
      <div className="mb-10 h-8 w-48 animate-pulse rounded bg-white/4" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="aspect-3/4 animate-pulse rounded bg-white/4" />
            <div className="h-4 w-24 animate-pulse rounded bg-white/4" />
            <div className="h-4 w-32 animate-pulse rounded bg-white/4" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProductPage() {
  const product = useProductBySlug()
  const { addItem } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    if (!product) {
      navigate(ROUTES.shop, { replace: true })
    }
  }, [product, navigate])

  if (!product) return null

  const handleAddToCart = () => {
    addItem(product)
  }

  const galleryImages =
    product.gallery.length > 0 ? product.gallery : [product.image]

  return (
    <RootLayout navbar="product">
      <Section spacing="lg" className="pt-28 md:pt-32">
        <Container>
          <div
            className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
            itemScope
            itemType="https://schema.org/Product"
          >
            <meta itemProp="name" content={product.name} />
            <meta itemProp="description" content={product.description} />
            <meta itemProp="brand" content="NOIR" />
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="price" content={String(product.price)} />
              <meta itemProp="priceCurrency" content="USD" />
              <meta itemProp="availability" content="https://schema.org/InStock" />
            </div>

            <ProductGallery
              images={galleryImages}
              productName={product.name}
            />

            <ProductInfo
              product={product}
              onAddToCart={handleAddToCart}
            />
          </div>

          <div className="mt-16 md:mt-20">
            <RelatedProducts
              currentProduct={product}
              allProducts={products}
            />
          </div>

          <div className="mt-16 md:mt-20">
            <Suspense fallback={<SectionLoader />}>
              <ProductReviews productId={product.id} />
            </Suspense>
          </div>

          <div className="mt-16 md:mt-20">
            <Suspense fallback={<SectionLoader />}>
              <RecentlyViewed excludeId={product.id} />
            </Suspense>
          </div>
        </Container>
      </Section>

      <CartDrawer />
    </RootLayout>
  )
}

export default ProductPage