import { products } from "@/data/products"
import type { Product } from "@/types/product"

export function getProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(productId: string, limit = 3): Product[] {
  return products.filter((item) => item.id !== productId).slice(0, limit)
}
