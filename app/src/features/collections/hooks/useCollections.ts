import { useMemo } from "react"
import { useProducts } from "@/features/products"
import { COLLECTIONS } from "@/features/collections/data/collections"
import type { Collection } from "@/features/collections/types"

/**
 * Merges the static editorial collection copy with a live product count
 * from the catalog, so the two data sources can never drift out of sync
 * (e.g. a new product added to `data/products.ts` is reflected here
 * automatically, without editing collection copy by hand).
 */
export function useCollections(): Collection[] {
  const products = useProducts()

  return useMemo(
    () =>
      COLLECTIONS.map((collection) => ({
        ...collection,
        productCount: products.filter((product) => product.category === collection.category)
          .length,
      })),
    [products],
  )
}