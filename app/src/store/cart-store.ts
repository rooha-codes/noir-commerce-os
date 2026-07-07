import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "@/types/product"
import type { CartItem } from "@/types/cart"

type CartStore = {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  increase: (id: string) => void
  decrease: (id: string) => void
  clearCart: () => void
  count: () => number
  subtotal: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addItem: (product) => {
        const existing = get().items.find((item) => item.id === product.id)

        if (existing) {
          set({
            items: get().items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
            isOpen: true,
          })
          return
        }

        set({
          items: [...get().items, { ...product, quantity: 1 }],
          isOpen: true,
        })
      },

      removeItem: (id) =>
        set({
          items: get().items.filter((item) => item.id !== id),
        }),

      increase: (id) =>
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }),

      decrease: (id) =>
        set({
          items: get()
            .items.map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        }),

      clearCart: () => set({ items: [] }),

      count: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      subtotal: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
    }),
    {
      name: "noir-cart",
    },
  ),
)
