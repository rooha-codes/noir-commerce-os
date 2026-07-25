import { lazy, Suspense, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { CartDrawer } from "@/components/commerce/CartDrawer"
import { RootLayout } from "@/components/layout/RootLayout"
import { Seo } from "@/components/seo/Seo"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { ROUTES } from "@/constants/routes"
import { products } from "@/data/products"
import { useCart } from "@/features/cart"
import { ProductGallery } from "@/features/products/components/ProductGallery"
import { ProductInfo } from "@/features/products/components/ProductInfo"
import { RelatedProducts } from "@/features/products/components/RelatedProducts"
import { useProductBySlug } from "@/features/products/hooks/useProductBySlug"

const ProductReviews = lazy(() =>
  import("@/features/reviews/components/ProductReviews").then(
    (module) => ({
      default: module.ProductReviews,
    }),
  ),
)

const RecentlyViewed = lazy(() =>
  import("@/features/products/components/RecentlyViewed").then(
    (module) => ({
      default: module.RecentlyViewed,
    }),
  ),
)

function SectionLoader() {
  return (
    <div className="border-t border-white/10 pt-16">
      <div className="mb-10 h-8 w-48 animate-pulse rounded bg-white/4" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-3"
          >
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
      navigate(ROUTES.SHOP, {
        replace: true,
      })
    }
  }, [navigate, product])

  if (!product) {
    return null
  }

  const handleAddToCart = () => {
    addItem(product)
  }

  const galleryImages =
    product.gallery.length > 0
      ? product.gallery
      : [product.image]

  return (
    <>
      <Seo
        title={`${product.name} | NOIR Commerce`}
        description={product.description}
      />

      <RootLayout navbar="product">
        <Section
          spacing="lg"
          className="pt-28 md:pt-32"
        >
          <Container>
            <div
              className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta
                itemProp="name"
                content={product.name}
              />

              <meta
                itemProp="description"
                content={product.description}
              />

              <meta
                itemProp="brand"
                content="NOIR"
              />

              <div
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <meta
                  itemProp="price"
                  content={String(product.price)}
                />

                <meta
                  itemProp="priceCurrency"
                  content="USD"
                />

                <meta
                  itemProp="availability"
                  content="https://schema.org/InStock"
                />
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
    </>
  )
}

export default ProductPage