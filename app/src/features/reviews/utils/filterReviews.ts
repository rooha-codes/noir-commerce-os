import type { Review } from "@/features/reviews/types"

export function filterReviewsByRating(
  reviews: readonly Review[],
  rating: number | null,
): Review[] {
  if (rating === null) return [...reviews]
  return reviews.filter((review) => review.rating === rating)
}

export function getAverageRating(reviews: readonly Review[]): number {
  if (reviews.length === 0) return 0
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return Math.round((sum / reviews.length) * 10) / 10
}

export function getRatingDistribution(
  reviews: readonly Review[],
): Record<number, number> {
  const distribution: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  reviews.forEach((review) => {
    if (review.rating >= 1 && review.rating <= 5) {
      distribution[review.rating] = (distribution[review.rating] ?? 0) + 1
    }
  })
  return distribution
}

export function getReviewCount(reviews: readonly Review[]): number {
  return reviews.length
}