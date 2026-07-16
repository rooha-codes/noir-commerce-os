import { useState } from "react"
import { Minus, Plus, Truck, RotateCcw, ShieldCheck, Award } from "lucide-react"
import { Button } from "@/components/ui/Button"
import type { Product } from "@/types/product"

type ProductInfoProps = {
  product: Product
  onAddToCart: (product: Product, quantity: number) => void
}

export function ProductInfo({ product, onAddToCart }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)

  const decrease = () => setQuantity((q) => Math.max(1, q - 1))
  const increase = () => setQuantity((q) => q + 1)

  const handleAddToCart = () => {
    onAddToCart(product, quantity)
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
          {product.category}
        </p>
        <h1 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl lg:text-5xl">
          {product.name}
        </h1>
        <p className="mt-4 text-2xl font-light text-white/80">
          ${product.price}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-white/55">
        {product.description}
      </p>

      <div className="flex flex-col gap-4 border-y border-white/10 py-6">
        <div className="flex items-center gap-3 text-sm text-white/50">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>In Stock — Ships within 2 business days</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-full border border-white/10">
            <button
              onClick={decrease}
              aria-label="Decrease quantity"
              className="grid h-10 w-10 place-items-center text-white/60 transition hover:text-white"
            >
              <Minus size={14} />
            </button>
            <span className="w-10 text-center text-sm font-medium">
              {quantity}
            </span>
            <button
              onClick={increase}
              aria-label="Increase quantity"
              className="grid h-10 w-10 place-items-center text-white/60 transition hover:text-white"
            >
              <Plus size={14} />
            </button>
          </div>

          <Button onClick={handleAddToCart} className="flex-1">
            Add to Bag
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-3 text-xs text-white/45">
          <Truck size={16} className="shrink-0 text-white/30" />
          <span>Free shipping over $200</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/45">
          <RotateCcw size={16} className="shrink-0 text-white/30" />
          <span>30-day returns</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/45">
          <ShieldCheck size={16} className="shrink-0 text-white/30" />
          <span>Secure checkout</span>
        </div>
      </div>

      {product.details.length > 0 && (
        <div>
          <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
            Highlights
          </h3>
          <ul className="flex flex-col gap-2">
            {product.details.map((detail, index) => (
              <li
                key={`${detail}-${index}`}
                className="flex items-start gap-3 text-sm text-white/55"
              >
                <Award size={14} className="mt-0.5 shrink-0 text-white/25" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(product.sizes.length > 0 || product.colors.length > 0) && (
        <div>
          <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
            Specifications
          </h3>
          <div className="flex flex-col gap-3 text-sm text-white/55">
            {product.sizes.length > 0 && (
              <div className="flex gap-2">
                <span className="text-white/30">Sizes:</span>
                <span>{product.sizes.join(", ")}</span>
              </div>
            )}
            {product.colors.length > 0 && (
              <div className="flex gap-2">
                <span className="text-white/30">Colors:</span>
                <span>{product.colors.join(", ")}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}