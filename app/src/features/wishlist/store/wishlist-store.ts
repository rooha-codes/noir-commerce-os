import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { WishlistStore } from "@/features/wishlist/types"

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      ids: [],

      add: (id) => {
        const exists = get().ids.includes(id)
        if (!exists) {
          set({ ids: [...get().ids, id] })
        }
      },

      remove: (id) => {
        set({ ids: get().ids.filter((existing) => existing !== id) })
      },

      toggle: (id) => {
        const exists = get().ids.includes(id)
        if (exists) {
          set({ ids: get().ids.filter((existing) => existing !== id) })
        } else {
          set({ ids: [...get().ids, id] })
        }
      },

      clear: () => set({ ids: [] }),

      has: (id) => get().ids.includes(id),

      count: () => get().ids.length,
    }),
    {
      name: "noir-wishlist",
    },
  ),
)