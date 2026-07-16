import { Star } from "lucide-react"
import { cn } from "@/utils/cn"

type StarRatingProps = {
  rating: number
  max?: number
  size?: number
  className?: string
}

export function StarRating({
  rating,
  max = 5,
  size = 14,
  className,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => {
        const filled = index < Math.floor(rating)
        const partial = !filled && index < rating

        return (
          <Star
            key={index}
            size={size}
            className={cn(
              "transition",
              filled
                ? "fill-amber-400 text-amber-400"
                : partial
                  ? "fill-amber-400/50 text-amber-400"
                  : "fill-transparent text-white/20",
            )}
          />
        )
      })}
    </div>
  )
}