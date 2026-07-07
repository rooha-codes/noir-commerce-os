import { useCartStore } from "@/store/cart-store"

export function useCart() {
  return useCartStore()
}

export { useCartStore } from "@/store/cart-store"
