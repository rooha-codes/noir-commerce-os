import { Minus, Plus } from "lucide-react"
import { useState } from "react"

import type { Product } from "@/types/product"
import { useCart } from "@/features/cart"
import { WishlistButton } from "@/features/products/components/WishlistButton"

type ProductInfoPanelProps = {
  product: Product
}

export function ProductInfoPanel({
  product,
}: ProductInfoPanelProps) {
  const { addItem } = useCart()

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleAddToCart() {
    if (!selectedSize || !selectedColor) {
      return
    }

    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
  }

  return (
    <div className="md:sticky md:top-28 md:h-fit">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">
        {product.category}
      </p>

      <h1 className="max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-7xl">
        {product.name}
      </h1>

      <p className="mt-5 text-2xl text-white/80">
        ${product.price}
      </p>

      <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/55">
        {product.description}
      </p>

      <div className="mt-10">
        <div className="mb-3 flex justify-between text-sm">
          <span className="uppercase tracking-[0.2em] text-white/50">
            Size
          </span>

          {!selectedSize && (
            <span className="text-white/35">
              Required
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              aria-pressed={selectedSize === size}
              className={`h-11 min-w-12 border px-4 text-sm transition ${
                selectedSize === size
                  ? "border-white bg-white text-black"
                  : "border-white/15 text-white/70 hover:border-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 flex justify-between text-sm">
          <span className="uppercase tracking-[0.2em] text-white/50">
            Color
          </span>

          {!selectedColor && (
            <span className="text-white/35">
              Required
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              aria-pressed={selectedColor === color}
              className={`rounded-full border px-5 py-3 text-sm transition ${
                selectedColor === color
                  ? "border-white bg-white text-black"
                  : "border-white/15 text-white/70 hover:border-white"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex items-center rounded-full border border-white/15">
          <button
            type="button"
            onClick={() =>
              setQuantity((current) =>
                Math.max(1, current - 1),
              )
            }
            aria-label="Decrease quantity"
            className="grid h-12 w-12 place-items-center"
          >
            <Minus size={16} />
          </button>

          <span className="w-10 text-center">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() =>
              setQuantity((current) => current + 1)
            }
            aria-label="Increase quantity"
            className="grid h-12 w-12 place-items-center"
          >
            <Plus size={16} />
          </button>
        </div>

        <WishlistButton
          productId={product.id}
          className="h-12 w-12 border-white/15"
        />
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!selectedSize || !selectedColor}
        className="mt-8 w-full rounded-full bg-white py-4 text-sm font-medium uppercase tracking-[0.18em] text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-30"
      >
        Add to Bag
      </button>

      <div className="mt-10 border-t border-white/10 pt-6">
        <h2 className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
          Details
        </h2>

        <ul className="space-y-3 text-white/55">
          {product.details.map((detail) => (
            <li key={detail}>
              • {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}