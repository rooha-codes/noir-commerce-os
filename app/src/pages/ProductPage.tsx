import { useEffect } from "react"
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
import { ProductReviews } from "@/features/reviews/components/ProductReviews"
import { RecentlyViewed } from "@/features/products/components/RecentlyViewed"
import { products } from "@/data/products"
import { ROUTES } from "@/constants/routes"

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
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <ProductGallery
              images={galleryImages}
              productName={product.name}
            />

            <ProductInfo
              product={product}
              onAddToCart={handleAddToCart}
            />
          </div>

          <div className="mt-20">
            <RelatedProducts
              currentProduct={product}
              allProducts={products}
            />
          </div>

          <div className="mt-20">
            <ProductReviews productId={product.id} />
          </div>

          <div className="mt-20">
            <RecentlyViewed excludeId={product.id} />
          </div>
        </Container>
      </Section>

      <CartDrawer />
    </RootLayout>
  )
}

export default ProductPage