import type { JournalArticle } from "@/features/journal/types"

/**
 * Static editorial journal content.
 */
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "entry-01",
    category: "Material",
    title: "Why We Still Weave In Heavy Wool",
    excerpt:
      "Lighter fabrics photograph well but rarely age well. Our outerwear is built from dense wool blends chosen for how they hold shape after years of wear, not how they look in a single shoot.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
    author: "The NOIR Studio",
    date: "March 2026",
    readingTimeMinutes: 6,
    featured: true,
  },
  {
    id: "entry-02",
    category: "Process",
    title: "Inside A Single Pattern Revision",
    excerpt:
      "The Structured Oversized Coat went through eleven pattern revisions before release. Each one adjusted the drop of the shoulder by millimeters until the silhouette held its line at rest and in motion.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop",
    author: "Studio Journal Team",
    date: "February 2026",
    readingTimeMinutes: 8,
  },
  {
    id: "entry-03",
    category: "Studio",
    title: "A Smaller Collection, On Purpose",
    excerpt:
      "We release fewer pieces than most studios our size. Every addition to the collection has to earn a place next to what already exists, or it does not ship.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1400&auto=format&fit=crop",
    author: "The NOIR Studio",
    date: "January 2026",
    readingTimeMinutes: 4,
  },
  {
    id: "entry-04",
    category: "Design",
    title: "Building A Silhouette From The Shoulder Down",
    excerpt:
      "Most of our fit decisions start at the shoulder line, not the hem. Get that single seam right and the rest of a garment's drape tends to follow it without a fight.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1400&auto=format&fit=crop",
    author: "Design Director",
    date: "December 2025",
    readingTimeMinutes: 7,
  },
  {
    id: "entry-05",
    category: "Material",
    title: "The Case For Fewer, Heavier Fabrics",
    excerpt:
      "We would rather stock three fabrics we trust for a decade than thirty we are unsure of. Weight and density are the first specifications we set, before color ever enters the conversation.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1400&auto=format&fit=crop",
    author: "The NOIR Studio",
    date: "November 2025",
    readingTimeMinutes: 5,
  },
  {
    id: "entry-06",
    category: "Process",
    title: "What Eleven Fittings Actually Change",
    excerpt:
      "A trouser's break and rise look like small details until you have sat, walked, and stood in eleven versions of the same pair. Most of what changes between fittings is invisible until it is not.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1400&auto=format&fit=crop",
    author: "Studio Journal Team",
    date: "October 2025",
    readingTimeMinutes: 6,
  },
]