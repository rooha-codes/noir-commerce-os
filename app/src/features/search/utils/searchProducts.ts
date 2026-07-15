import type { Product } from "@/types/product"

export function searchProducts(
  products: readonly Product[],
  query: string,
): Product[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return []

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(normalized) ||
      product.category.toLowerCase().includes(normalized) ||
      product.description.toLowerCase().includes(normalized),
  )
}