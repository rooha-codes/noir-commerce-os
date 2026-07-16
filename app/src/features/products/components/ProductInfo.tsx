import { useState, useCallback } from "react"
import { Minus, Plus, Truck, RotateCcw, ShieldCheck, Award, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import type { Product } from "@/types/product"

type ProductInfoProps = {
  product: Product
  onAddToCart: (product: Product, quantity: number) => void
}

export function ProductInfo({ product, onAddToCart }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const decrease = useCallback(() => setQuantity((q) => Math.max(1, q - 1)), [])
  const increase = useCallback(() => setQuantity((q) => q + 1), [])

  const handleAddToCart = useCallback(() => {
    onAddToCart(product, quantity)
    setAdded(true)
    const timer = setTimeout(() => setAdded(false), 2000)
    return () => clearTimeout(timer)
  }, [onAddToCart, product, quantity])

  return (
    <article className="flex flex-col gap-8">
      <header>
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
          {product.category}
        </p>
        <h1 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl lg:text-5xl">
          {product.name}
        </h1>
        <p className="mt-4 text-2xl font-light text-white/80">
          ${product.price}
        </p>
      </header>

      <p className="text-sm leading-relaxed text-white/55">
        {product.description}
      </p>

      <div className="flex flex-col gap-4 border-y border-white/10 py-6">
        <div className="flex items-center gap-3 text-sm text-white/50">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>In Stock — Ships within 2 business days</span>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="flex items-center rounded-full border border-white/10"
            role="group"
            aria-label="Quantity selector"
          >
            <button
              onClick={decrease}
              aria-label="Decrease quantity"
              disabled={quantity <= 1}
              className="grid h-10 w-10 place-items-center text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Minus size={14} />
            </button>
            <output
              aria-live="polite"
              className="w-10 text-center text-sm font-medium tabular-nums"
            >
              {quantity}
            </output>
            <button
              onClick={increase}
              aria-label="Increase quantity"
              className="grid h-10 w-10 place-items-center text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              <Plus size={14} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {added ? (
              <motion.div
                key="added"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500/10 py-3 text-sm font-medium uppercase tracking-widest text-emerald-400"
              >
                <Check size={16} />
                Added to Bag
              </motion.div>
            ) : (
              <Button
                key="add"
                onClick={handleAddToCart}
                className="flex-1"
              >
                Add to Bag
              </Button>
            )}
          </AnimatePresence>
        </div>
      </div>

      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-3 text-xs text-white/45">
          <dt className="sr-only">Shipping</dt>
          <Truck size={16} className="shrink-0 text-white/30" aria-hidden="true" />
          <dd>Free shipping over $200</dd>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/45">
          <dt className="sr-only">Returns</dt>
          <RotateCcw size={16} className="shrink-0 text-white/30" aria-hidden="true" />
          <dd>30-day returns</dd>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/45">
          <dt className="sr-only">Security</dt>
          <ShieldCheck size={16} className="shrink-0 text-white/30" aria-hidden="true" />
          <dd>Secure checkout</dd>
        </div>
      </dl>

      {product.details.length > 0 && (
        <section aria-labelledby="highlights-heading">
          <h2
            id="highlights-heading"
            className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40"
          >
            Highlights
          </h2>
          <ul className="flex flex-col gap-2">
            {product.details.map((detail, index) => (
              <li
                key={`${detail}-${index}`}
                className="flex items-start gap-3 text-sm text-white/55"
              >
                <Award size={14} className="mt-0.5 shrink-0 text-white/25" aria-hidden="true" />
                {detail}
              </li>
            ))}
          </ul>
        </section>
      )}

      {(product.sizes.length > 0 || product.colors.length > 0) && (
        <section aria-labelledby="specs-heading">
          <h2
            id="specs-heading"
            className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40"
          >
            Specifications
          </h2>
          <dl className="flex flex-col gap-3 text-sm text-white/55">
            {product.sizes.length > 0 && (
              <div className="flex gap-2">
                <dt className="text-white/30">Sizes:</dt>
                <dd>{product.sizes.join(", ")}</dd>
              </div>
            )}
            {product.colors.length > 0 && (
              <div className="flex gap-2">
                <dt className="text-white/30">Colors:</dt>
                <dd>{product.colors.join(", ")}</dd>
              </div>
            )}
          </dl>
        </section>
      )}
    </article>
  )
}