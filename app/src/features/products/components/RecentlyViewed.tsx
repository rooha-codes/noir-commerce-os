import { ProductCard } from "@/components/commerce/ProductCard"
import { useRecentlyViewed } from "@/features/products/hooks/useRecentlyViewed"

type RecentlyViewedProps = {
  excludeId?: string
}

export function RecentlyViewed({ excludeId }: RecentlyViewedProps) {
  const items = useRecentlyViewed(excludeId)

  if (items.length === 0) return null

  return (
    <section className="border-t border-white/10 pt-16">
      <div className="mb-10">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
          Your Journey
        </p>
        <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
          Recently Viewed
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}