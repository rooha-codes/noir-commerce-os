import { useMemo, useState } from "react"
import type { JournalArticle } from "@/features/journal/types"
import { ALL_JOURNAL_CATEGORY } from "@/features/journal/types"

export type UseJournalFiltersResult = {
  category: string
  setCategory: (category: string) => void
  categories: string[]
  featuredArticle: JournalArticle | undefined
  gridArticles: JournalArticle[]
}

/**
 * Splits the featured article out from the rest of the catalog and
 * applies an optional category filter to the remaining grid. The
 * featured article always stays visible regardless of the active filter,
 * matching how a magazine masthead article behaves.
 */
export function useJournalFilters(articles: JournalArticle[]): UseJournalFiltersResult {
  const [category, setCategory] = useState<string>(ALL_JOURNAL_CATEGORY)

  const categories = useMemo(() => {
    const unique = new Set(articles.map((article) => article.category))
    return Array.from(unique).sort((a, b) => a.localeCompare(b))
  }, [articles])

  const featuredArticle = useMemo(
    () => articles.find((article) => article.featured) ?? articles[0],
    [articles],
  )

  const gridArticles = useMemo(() => {
    return articles.filter((article) => {
      const isFeatured = article.id === featuredArticle?.id
      const matchesCategory = category === ALL_JOURNAL_CATEGORY || article.category === category
      return !isFeatured && matchesCategory
    })
  }, [articles, category, featuredArticle])

  return {
    category,
    setCategory,
    categories,
    featuredArticle,
    gridArticles,
  }
}