import { ProductCard } from "@/components/commerce/ProductCard"
import { useProducts } from "@/features/products/hooks/useProducts"

export function CollectionSection() {
  const products = useProducts()

  return (
    <section id="collection" className="px-5 py-24 md:px-10">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
            New Drop
          </p>

          <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            The Essential Edit
          </h2>
        </div>

        <p className="hidden max-w-sm text-white/50 md:block">
          Wardrobe pieces built for daily use, refined through fabric,
          proportion, and restraint.
        </p>
      </div>

      <div id="shop" className="grid gap-5 md:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
