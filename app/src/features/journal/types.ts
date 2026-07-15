/**
 * Sprint 3 · Batch 3 — Journal feature types.
 *
 * There is no article-detail route, so an article is editorial content
 * only — no slug-based routing is implied or required by this type.
 */

/** Sentinel category value meaning "no category filter applied". */
export const ALL_JOURNAL_CATEGORY = "All"

export type JournalArticle = {
  id: string
  category: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readingTimeMinutes: number
  featured?: boolean
}