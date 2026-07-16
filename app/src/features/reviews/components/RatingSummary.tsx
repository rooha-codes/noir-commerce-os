import { StarRating } from "@/features/reviews/components/StarRating"
import { getAverageRating, getRatingDistribution } from "@/features/reviews/utils/filterReviews"
import type { Review } from "@/features/reviews/types"

type RatingSummaryProps = {
  reviews: readonly Review[]
  activeFilter: number | null
  onFilterChange: (rating: number | null) => void
}

export function RatingSummary({ reviews, activeFilter, onFilterChange }: RatingSummaryProps) {
  const average = getAverageRating(reviews)
  const total = reviews.length
  const distribution = getRatingDistribution(reviews)

  const ratings = [5, 4, 3, 2, 1] as const

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-end gap-3">
        <span className="text-5xl font-medium tracking-[-0.04em] text-white/90">
          {average.toFixed(1)}
        </span>
        <div className="mb-1.5 flex flex-col gap-1">
          <StarRating rating={average} size={14} />
          <span className="text-xs text-white/40">
            Based on {total} {total === 1 ? "review" : "reviews"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {ratings.map((rating) => {
          const count = distribution[rating] ?? 0
          const percentage = total > 0 ? (count / total) * 100 : 0
          const isActive = activeFilter === rating

          return (
            <button
              key={rating}
              onClick={() => onFilterChange(isActive ? null : rating)}
              className="group flex items-center gap-3 text-left transition"
              aria-pressed={isActive}
            >
              <span className="w-3 text-xs text-white/50">{rating}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-white/30 transition-all group-hover:bg-white/50"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span
                className={`w-8 text-right text-xs transition ${
                  isActive ? "text-white" : "text-white/40 group-hover:text-white/60"
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}