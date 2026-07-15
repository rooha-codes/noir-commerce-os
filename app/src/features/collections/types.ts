/**
 * Sprint 3 · Batch 3 — Collections feature types.
 *
 * Static, typed, frontend-only. There is no collection-detail route in
 * the app, so a Collection is a purely editorial construct — metadata and
 * imagery — rather than a queryable entity with its own page.
 */

export type Collection = {
  id: string
  name: string
  slug: string
  description: string
  image: string
  editorialLabel: string
  /** Matches `Product.category` so the count can be derived from live catalog data. */
  category: string
  productCount?: number
}