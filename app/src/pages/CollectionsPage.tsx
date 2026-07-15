import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { useCollections, CollectionsHero, CollectionCard } from "@/features/collections"

export function CollectionsPage() {
  const collections = useCollections()

  return (
    <RootLayout navbar="home" showFooter>
      <Section spacing="lg" className="pt-32">
        <Container>
          <CollectionsHero />

          <div className="flex flex-col gap-16">
            {collections.map((collection, index) => (
              <CollectionCard key={collection.id} collection={collection} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      <CartDrawer />
    </RootLayout>
  )
}

export default CollectionsPage