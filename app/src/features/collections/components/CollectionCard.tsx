import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

import fallbackImage from "@/assets/hero.png"
import { MotionRevealOnScroll } from "@/components/motion/MotionRevealOnScroll"
import { ROUTES } from "@/constants/routes"
import type { Collection } from "@/features/collections/types"
import { cn } from "@/utils/cn"

type CollectionCardProps = {
  collection: Collection
  index: number
}

export function CollectionCard({
  collection,
  index,
}: CollectionCardProps) {
  const imageOnRight = index % 2 === 1

  return (
    <MotionRevealOnScroll
      index={index}
      className="grid items-center gap-8 border-b border-border pb-16 last:border-b-0 md:grid-cols-2 md:gap-14"
    >
      <div
        className={cn(
          "aspect-4/5 overflow-hidden bg-white/5",
          imageOnRight && "md:order-2",
        )}
      >
        <img
          src={collection.image}
          alt={`${collection.name} collection`}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackImage
          }}
          className="h-full w-full object-cover"
        />
      </div>

      <div className={cn(imageOnRight && "md:order-1")}>
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">
          {collection.editorialLabel}
        </p>

        <h2 className="mb-5 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
          {collection.name}
        </h2>

        <p className="mb-6 max-w-md text-white/55">
          {collection.description}
        </p>

        {typeof collection.productCount === "number" && (
          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-white/35">
            {collection.productCount}{" "}
            {collection.productCount === 1 ? "Piece" : "Pieces"} In This
            Collection
          </p>
        )}

        <Link
          to={ROUTES.shop}
          className="inline-flex items-center gap-3 rounded-full border border-border-strong px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] transition hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Explore Collection

          <ArrowUpRight
            size={16}
            aria-hidden="true"
          />
        </Link>
      </div>
    </MotionRevealOnScroll>
  )
}

export default CollectionCard