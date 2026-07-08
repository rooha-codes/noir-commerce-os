import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Divider } from "@/components/ui/Divider"

const PRINCIPLES = [
  {
    title: "Restraint",
    body: "Every piece is reduced until only what matters remains — no decoration without purpose, no seam without reason.",
  },
  {
    title: "Material",
    body: "We work with heavy wools, dense cottons, and finishes chosen for how they wear over years, not seasons.",
  },
  {
    title: "Proportion",
    body: "Silhouettes are built around structure and drape first, so a piece holds its shape long after the first fitting.",
  },
]

export function AboutPage() {
  return (
    <RootLayout navbar="home" showFooter>
      <Section spacing="lg" className="pt-32">
        <Container size="narrow">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
            Our Story
          </p>
          <h1 className="mb-8 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Built for the long wear.
          </h1>
          <p className="text-lg leading-relaxed text-white/60 md:text-xl">
            NOIR began as a study in restraint — a small collection of pieces
            designed to outlast the seasons they were made for. We build
            garments around structure, fabric weight, and quiet detail,
            rather than trend. The result is a wardrobe meant to be worn
            often and repaired, not replaced.
          </p>
        </Container>
      </Section>

      <Divider className="mx-5 md:mx-10" />

      <Section spacing="lg">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {PRINCIPLES.map((principle) => (
              <div key={principle.title}>
                <h2 className="mb-3 text-2xl font-medium tracking-tight">
                  {principle.title}
                </h2>
                <p className="text-white/50">{principle.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CartDrawer />
    </RootLayout>
  )
}

export default AboutPage