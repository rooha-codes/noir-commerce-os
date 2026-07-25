import { Link } from "react-router-dom"

import { MotionRevealOnScroll } from "@/components/motion/MotionRevealOnScroll"
import { useCart } from "@/features/cart"
import { WishlistButton } from "@/features/products/components/WishlistButton"
import type { Product } from "@/types/product"

type ProductCardProps = {
  product: Product
  index: number
}

export function ProductCard({
  product,
  index,
}: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <MotionRevealOnScroll
      index={index}
      className="group"
    >
      <div className="relative mb-4 aspect-3/4 overflow-hidden bg-white/5">
        <Link
          to={`/product/${product.slug}`}
          aria-label={`View ${product.name}`}
          className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-inset"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>

        <WishlistButton
          productId={product.id}
          className="absolute right-4 top-4 h-10 w-10 bg-black/50 backdrop-blur-md"
        />

        <button
          type="button"
          onClick={() => addItem(product)}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-4 left-4 right-4 rounded-full bg-white px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-black transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100"
        >
          Quick Add
        </button>
      </div>

      <Link
        to={`/product/${product.slug}`}
        aria-label={`View details for ${product.name}`}
        className="flex items-start justify-between gap-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
      >
        <div>
          <p className="mb-1 text-xs uppercase tracking-[0.25em] text-white/35">
            {product.category}
          </p>

          <h3 className="text-base text-white/90">
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-white/50">
          ${product.price}
        </p>
      </Link>
    </MotionRevealOnScroll>
  )
}

export default ProductCard