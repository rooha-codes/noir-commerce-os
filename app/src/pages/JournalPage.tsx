import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import {
  useJournalFilters,
  JournalHero,
  FeaturedArticle,
  JournalCard,
  CategoryFilterBar,
  JOURNAL_ARTICLES,
} from "@/features/journal"

export function JournalPage() {
  const { category, setCategory, categories, featuredArticle, gridArticles } =
    useJournalFilters(JOURNAL_ARTICLES)

  return (
    <RootLayout navbar="home" showFooter>
      <Section spacing="lg" className="pt-32">
        <Container>
          <JournalHero />

          {featuredArticle && <FeaturedArticle article={featuredArticle} />}

          <CategoryFilterBar
            categories={categories}
            active={category}
            onSelect={setCategory}
          />

          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {gridArticles.map((article, index) => (
              <JournalCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      <CartDrawer />
    </RootLayout>
  )
}

export default JournalPage