import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import {
  AboutHero,
  AboutSection,
  AboutCTA,
  ABOUT_HERO,
  ABOUT_SECTIONS,
  ABOUT_CTA,
} from "@/features/about"

export function AboutPage() {
  return (
    <RootLayout navbar="home" showFooter>
      <AboutHero content={ABOUT_HERO} />

      {ABOUT_SECTIONS.map((section, index) => (
        <AboutSection key={section.id} content={section} index={index} />
      ))}

      <AboutCTA content={ABOUT_CTA} />

      <CartDrawer />
    </RootLayout>
  )
}

export default AboutPage