import { Clock } from "lucide-react"

import fallbackImage from "@/assets/hero.png"
import { MotionRevealOnScroll } from "@/components/motion/MotionRevealOnScroll"
import { Badge } from "@/components/ui/Badge"
import type { JournalArticle } from "@/features/journal/types"

type FeaturedArticleProps = {
  article: JournalArticle
}

export function FeaturedArticle({
  article,
}: FeaturedArticleProps) {
  return (
    <MotionRevealOnScroll className="mb-20 grid gap-8 border-b border-border pb-16 md:grid-cols-2 md:items-center md:gap-14">
      <div className="aspect-4/3 overflow-hidden bg-white/5">
        <img
          src={article.image}
          alt={`${article.title} featured editorial image`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackImage
          }}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Badge variant="default">
            Featured
          </Badge>

          <Badge variant="muted">
            {article.category}
          </Badge>
        </div>

        <h2 className="mb-5 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
          {article.title}
        </h2>

        <p className="mb-6 max-w-lg text-lg leading-relaxed text-white/55">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>{article.author}</span>

          <span aria-hidden="true">·</span>

          <span>{article.date}</span>

          <span aria-hidden="true">·</span>

          <span className="inline-flex items-center gap-1.5">
            <Clock
              size={13}
              aria-hidden="true"
            />
            {article.readingTimeMinutes} Min Read
          </span>
        </div>
      </div>
    </MotionRevealOnScroll>
  )
}

export default FeaturedArticle