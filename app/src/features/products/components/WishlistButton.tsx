import { Heart } from "lucide-react"
import { cn } from "@/utils/cn"
import { useWishlist } from "@/features/wishlist"

type WishlistButtonProps = {
  productId: string
  size?: number
  className?: string
}

export function WishlistButton({ productId, size = 18, className }: WishlistButtonProps) {
  const { toggle, has } = useWishlist()
  const isActive = has(productId)

  return (
    <button
      onClick={() => toggle(productId)}
      aria-label={isActive ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={isActive}
      className={cn(
        "grid place-items-center rounded-full border border-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
        isActive
          ? "bg-white text-black hover:bg-white/90"
          : "bg-transparent text-white/60 hover:bg-white/5 hover:text-white",
        className,
      )}
    >
      <Heart
        size={size}
        className={cn("transition", isActive && "fill-current")}
      />
    </button>
  )
}