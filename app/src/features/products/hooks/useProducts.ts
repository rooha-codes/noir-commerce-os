import { useMemo } from "react"
import { getProducts } from "@/services/product.service"

export function useProducts() {
  return useMemo(() => getProducts(), [])
}
export default useProducts