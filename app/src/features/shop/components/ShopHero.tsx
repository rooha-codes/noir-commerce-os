type ShopHeroProps = {
  totalCount: number
}

/**
 * Editorial hero for /shop. Keeps the same eyebrow + display heading
 * language already established by the pre-Batch-2 ShopPage markup, just
 * with a supporting line and a live catalog count added.
 */
export function ShopHero({ totalCount }: ShopHeroProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
        Full Collection
      </p>
      <h1 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
        Shop All
      </h1>
      <p className="mt-5 text-body-md text-white/50">
        {totalCount} pieces built on structure, restraint, and heavy
        fabrication — search, filter, and sort the full collection below.
      </p>
    </div>
  )
}