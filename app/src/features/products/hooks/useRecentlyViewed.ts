import { useEffect, useMemo } from "react"
import { products } from "@/data/products"
import type { Product } from "@/types/product"

const STORAGE_KEY = "noir-recently-viewed"
const MAX_ITEMS = 6

function readIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) {
      return parsed
    }
    return []
  } catch {
    return []
  }
}

function writeIds(ids: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  } catch {
    // localStorage unavailable
  }
}

function addRecentlyViewedId(productId: string): void {
  const current = readIds()
  const withoutCurrent = current.filter((id) => id !== productId)
  const updated = [productId, ...withoutCurrent].slice(0, MAX_ITEMS)
  writeIds(updated)
}

export function useRecentlyViewed(excludeId?: string): Product[] {
  useEffect(() => {
    if (excludeId) {
      addRecentlyViewedId(excludeId)
    }
  }, [excludeId])

  return useMemo(() => {
    const ids = readIds()
    const validProducts = ids
      .map((id) => products.find((p) => p.id === id))
      .filter((p): p is Product => p !== undefined && p.id !== excludeId)
    return validProducts
  }, [excludeId])
}