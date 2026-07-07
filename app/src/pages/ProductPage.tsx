import { Link, useParams } from "react-router-dom"
import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import {
  useProduct,
  ProductGallery,
  ProductInfoPanel,
  RelatedProductsSection,
} from "@/features/products"

export function ProductPage() {
  const { slug } = useParams()
  const product = useProduct(slug ?? "")

  if (!product) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#050505] px-5 text-[#f6f1e8]">
        <div className="text-center">
          <h1 className="mb-4 text-4xl">Product not found.</h1>
          <Link className="text-white/50 underline" to="/">
            Back to shop
          </Link>
        </div>
      </main>
    )
  }

  return (
    <RootLayout navbar="product">
      <section className="grid gap-10 px-5 pb-24 pt-28 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <ProductGallery product={product} />
        <ProductInfoPanel product={product} />
      </section>

      <RelatedProductsSection productId={product.id} />
      <CartDrawer />
    </RootLayout>
  )
}
