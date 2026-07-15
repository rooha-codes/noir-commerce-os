import { useMemo, useState } from "react"
import { products } from "@/data/products"
import { searchProducts } from "@/features/search/utils/searchProducts"

export function useProductSearch() {
  const [query, setQuery] = useState("")

  const results = useMemo(() => searchProducts(products, query), [query])

  return {
    query,
    setQuery,
    results,
    hasQuery: query.trim().length > 0,
  }
}