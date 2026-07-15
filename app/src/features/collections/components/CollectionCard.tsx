import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { ROUTES } from "@/constants/routes"
import { MotionRevealOnScroll } from "@/components/motion/MotionRevealOnScroll"
import { cn } from "@/utils/cn"
import type { Collection } from "@/features/collections/types"

type CollectionCardProps = {
  collection: Collection
  index: number
}

/**
 * Large, image-led editorial block. Alternates image side by index so the
 * page reads as a magazine spread rather than a repeating template.
 * There is no collection-detail route, so the CTA sends people to the
 * real, working /shop route rather than a dead per-collection page.
 */
export function CollectionCard({ collection, index }: CollectionCardProps) {
  const imageOnRight = index % 2 === 1

  return (
    <MotionRevealOnScroll
      index={index}
      className={cn(
        "grid items-center gap-8 border-b border-border pb-16 last:border-b-0 md:grid-cols-2 md:gap-14",
      )}
    >
      <div className={cn("aspect-[4/5] overflow-hidden bg-white/5", imageOnRight && "md:order-2")}>
        <img
          src={collection.image}
          alt={`${collection.name} collection`}
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

        <p className="mb-6 max-w-md text-white/55">{collection.description}</p>

        {typeof collection.productCount === "number" && (
          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-white/35">
            {collection.productCount}{" "}
            {collection.productCount === 1 ? "Piece" : "Pieces"} In This Collection
          </p>
        )}

        <Link
          to={ROUTES.shop}
          className="inline-flex items-center gap-3 rounded-full border border-border-strong px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] transition hover:bg-primary hover:text-primary-foreground hover:border-primary"
        >
          Explore Collection <ArrowUpRight size={16} />
        </Link>
      </div>
    </MotionRevealOnScroll>
  )
}