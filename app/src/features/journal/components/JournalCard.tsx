import { Clock } from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import { MotionRevealOnScroll } from "@/components/motion/MotionRevealOnScroll"
import type { JournalArticle } from "@/features/journal/types"

type JournalCardProps = {
  article: JournalArticle
  index: number
}

/**
 * Grid tile for the journal feature. Static and non-interactive beyond
 * hover affordance — there is no article-detail route to link to, so this
 * intentionally does not render as a `<Link>` or button, avoiding a dead
 * click target.
 */
export function JournalCard({ article, index }: JournalCardProps) {
  return (
    <MotionRevealOnScroll index={index} className="flex flex-col">
      <div className="mb-5 aspect-[4/3] overflow-hidden bg-white/5">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />
      </div>

      <Badge variant="muted" className="mb-4 self-start">
        {article.category}
      </Badge>

      <h3 className="mb-3 text-xl font-medium tracking-tight">{article.title}</h3>

      <p className="mb-5 flex-1 text-body-sm text-white/55">{article.excerpt}</p>

      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/35">
        <span>{article.author}</span>
        <span aria-hidden="true">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Clock size={12} />
          {article.readingTimeMinutes} Min Read
        </span>
      </div>
    </MotionRevealOnScroll>
  )
}