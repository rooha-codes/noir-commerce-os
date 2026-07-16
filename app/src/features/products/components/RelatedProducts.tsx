import { useState } from "react"
import { Link } from "react-router-dom"
import { ImageSkeleton } from "@/components/ui/ImageSkeleton"
import { ROUTES } from "@/constants/routes"
import { getRelatedProducts } from "@/features/products/utils/getRelatedProducts"
import type { Product } from "@/types/product"

type RelatedProductsProps = {
  currentProduct: Product
  allProducts: readonly Product[]
}

function RelatedProductCard({ product }: { product: Product }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link
      to={ROUTES.product(product.slug)}
      className="group flex flex-col gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="relative aspect-3/4 overflow-hidden bg-white/5">
        {!imageLoaded && (
          <ImageSkeleton
            className="absolute inset-0"
            aspectRatio="aspect-[3/4]"
          />
        )}

        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.03] ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          {product.category}
        </p>

        <h3 className="mt-1 text-sm font-medium text-white/90 transition-colors duration-normal group-hover:text-white">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-white/50">${product.price}</p>
      </div>
    </Link>
  )
}

export function RelatedProducts({
  currentProduct,
  allProducts,
}: RelatedProductsProps) {
  const related = getRelatedProducts(currentProduct, allProducts)

  if (related.length === 0) {
    return null
  }

  return (
    <section
      className="border-t border-white/10 pt-16"
      aria-labelledby="related-heading"
    >
      <header className="mb-10">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
          You May Also Like
        </p>

        <h2
          id="related-heading"
          className="text-2xl font-medium tracking-[-0.03em] md:text-3xl"
        >
          Related Products
        </h2>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((product) => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}