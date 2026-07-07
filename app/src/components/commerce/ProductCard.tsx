import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
import type { Product } from "@/types/product"
import { MotionRevealOnScroll } from "@/components/motion/MotionRevealOnScroll"
import { useCart } from "@/features/cart"

type ProductCardProps = {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <MotionRevealOnScroll index={index} className="group">
      <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-white/5">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>

        <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/50 backdrop-blur-md transition hover:bg-white hover:text-black">
          <Heart size={18} />
        </button>

        <button
          onClick={() => addItem(product)}
          className="absolute bottom-4 left-4 right-4 translate-y-3 rounded-full bg-white px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick Add
        </button>
      </div>

      <Link
        to={`/product/${product.slug}`}
        className="flex items-start justify-between gap-4"
      >
        <div>
          <p className="mb-1 text-xs uppercase tracking-[0.25em] text-white/35">
            {product.category}
          </p>
          <h3 className="text-base text-white/90">{product.name}</h3>
        </div>
        <p className="text-sm text-white/50">${product.price}</p>
      </Link>
    </MotionRevealOnScroll>
  )
}
