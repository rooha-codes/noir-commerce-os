import { useMemo } from "react"
import { getRelatedProducts } from "@/services/product.service"

export function useRelatedProducts(productId: string, limit = 3) {
  return useMemo(
    () => getRelatedProducts(productId, limit),
    [productId, limit],
  )
}
