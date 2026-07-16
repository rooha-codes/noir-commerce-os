import { useState, useMemo } from "react"
import { reviews as allReviews } from "@/features/reviews/data/reviews"
import { filterReviewsByRating } from "@/features/reviews/utils/filterReviews"
import { ReviewCard } from "@/features/reviews/components/ReviewCard"
import { RatingSummary } from "@/features/reviews/components/RatingSummary"

type ProductReviewsProps = {
  productId: string
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  const [activeFilter, setActiveFilter] = useState<number | null>(null)

  const productReviews = useMemo(
    () => allReviews.filter((review) => review.productId === productId),
    [productId],
  )

  const filteredReviews = useMemo(
    () => filterReviewsByRating(productReviews, activeFilter),
    [productReviews, activeFilter],
  )

  if (productReviews.length === 0) return null

  return (
    <section className="border-t border-white/10 pt-16">
      <div className="mb-10">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
          Community
        </p>
        <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
          Reviews
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <RatingSummary
            reviews={productReviews}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className="lg:col-span-8">
          {filteredReviews.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-sm text-white/40">
                No reviews match this filter.
              </p>
            </div>
          ) : (
            <div>
              {activeFilter !== null && (
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Showing {filteredReviews.length}{" "}
                    {filteredReviews.length === 1 ? "review" : "reviews"}
                  </p>
                  <button
                    onClick={() => setActiveFilter(null)}
                    className="text-xs text-white/50 transition hover:text-white"
                  >
                    Clear filter
                  </button>
                </div>
              )}
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}