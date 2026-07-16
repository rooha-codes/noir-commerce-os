import { Link } from "react-router-dom"
import { ROUTES } from "@/constants/routes"
import type { Product } from "@/types/product"
import { getRelatedProducts } from "../utils/getRelatedProducts"

type RelatedProductsProps = {
  currentProduct: Product
  allProducts: readonly Product[]
}

export function RelatedProducts({ currentProduct, allProducts }: RelatedProductsProps) {
  const related = getRelatedProducts(currentProduct, allProducts)

  if (related.length === 0) return null

  return (
    <section className="border-t border-white/10 pt-16">
      <div className="mb-10">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
          You May Also Like
        </p>
        <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
          Related Products
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((product) => (
          <Link
            key={product.id}
            to={ROUTES.product(product.slug)}
            className="group flex flex-col gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            <div className="relative aspect-3/4 overflow-hidden bg-white/5">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-normal group-hover:scale-[1.03]"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                {product.category}
              </p>
              <h3 className="mt-1 text-sm font-medium text-white/90 transition group-hover:text-white">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-white/50">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}