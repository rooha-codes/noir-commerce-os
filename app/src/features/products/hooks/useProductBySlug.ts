import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { products } from "@/data/products"
import type { Product } from "@/types/product"

export function useProductBySlug(): Product | undefined {
  const { slug } = useParams<{ slug: string }>()

  return useMemo(
    () => products.find((product) => product.slug === slug),
    [slug],
  )
}