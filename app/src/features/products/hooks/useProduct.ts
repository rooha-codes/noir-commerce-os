import { useMemo } from "react"
import { getProductBySlug } from "@/services/product.service"

export function useProduct(slug: string) {
  return useMemo(() => getProductBySlug(slug), [slug])
}
