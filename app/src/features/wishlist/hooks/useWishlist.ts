import { useWishlistStore } from "@/features/wishlist/store/wishlist-store"

export function useWishlist() {
  return useWishlistStore()
}