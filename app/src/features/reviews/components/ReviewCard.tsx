import { CheckCircle } from "lucide-react"
import { StarRating } from "@/features/reviews/components/StarRating"
import type { Review } from "@/features/reviews/types"

type ReviewCardProps = {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex flex-col gap-3 border-b border-white/10 py-6 last:border-b-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-xs font-medium uppercase tracking-wider text-white/60">
            {review.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-white/80">{review.author}</p>
            {review.verified && (
              <div className="flex items-center gap-1 text-xs text-emerald-400/80">
                <CheckCircle size={11} />
                <span>Verified Purchase</span>
              </div>
            )}
          </div>
        </div>
        <span className="text-xs text-white/30">{formattedDate}</span>
      </div>

      <div className="flex items-center gap-2">
        <StarRating rating={review.rating} size={12} />
      </div>

      <h4 className="text-sm font-medium text-white/90">{review.title}</h4>
      <p className="text-sm leading-relaxed text-white/50">{review.body}</p>

      <div className="flex items-center gap-2 text-xs text-white/30">
        <span>{review.helpful} found this helpful</span>
      </div>
    </div>
  )
}