import type { Product } from "@/types/product"

const MAX_RELATED = 4

export function getRelatedProducts(
  currentProduct: Product,
  allProducts: readonly Product[],
): Product[] {
  const others = allProducts.filter(
    (product) => product.id !== currentProduct.id,
  )

  const sameCategory = others.filter(
    (product) => product.category === currentProduct.category,
  )

  if (sameCategory.length >= MAX_RELATED) {
    return sameCategory.slice(0, MAX_RELATED)
  }

  const remaining = others.filter(
    (product) => product.category !== currentProduct.category,
  )

  return [...sameCategory, ...remaining].slice(0, MAX_RELATED)
}