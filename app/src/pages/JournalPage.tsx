import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Badge } from "@/components/ui/Badge"

type JournalEntry = {
  id: string
  category: string
  date: string
  title: string
  excerpt: string
}

const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "entry-01",
    category: "Material",
    date: "March 2026",
    title: "Why we still weave in heavy wool",
    excerpt:
      "Lighter fabrics photograph well but rarely age well. Our outerwear is built from dense wool blends chosen for how they hold shape after years of wear, not how they look in a single shoot.",
  },
  {
    id: "entry-02",
    category: "Process",
    date: "February 2026",
    title: "Inside a single pattern revision",
    excerpt:
      "The Structured Oversized Coat went through eleven pattern revisions before release. Each one adjusted the drop of the shoulder by millimeters until the silhouette held its line at rest and in motion.",
  },
  {
    id: "entry-03",
    category: "Studio",
    date: "January 2026",
    title: "A smaller collection, on purpose",
    excerpt:
      "We release fewer pieces than most studios our size. Every addition to the collection has to earn a place next to what already exists, or it doesn't ship.",
  },
]

export function JournalPage() {
  return (
    <RootLayout navbar="home" showFooter>
      <Section spacing="lg" className="pt-32">
        <Container size="narrow">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
            Notes From The Studio
          </p>
          <h1 className="mb-14 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Journal
          </h1>

          <div className="flex flex-col gap-12">
            {JOURNAL_ENTRIES.map((entry) => (
              <article
                key={entry.id}
                className="border-b border-white/10 pb-12 last:border-b-0"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Badge variant="muted">{entry.category}</Badge>
                  <span className="text-xs uppercase tracking-[0.25em] text-white/35">
                    {entry.date}
                  </span>
                </div>

                <h2 className="mb-3 text-2xl font-medium tracking-tight md:text-3xl">
                  {entry.title}
                </h2>

                <p className="text-white/55">{entry.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CartDrawer />
    </RootLayout>
  )
}

export default JournalPage