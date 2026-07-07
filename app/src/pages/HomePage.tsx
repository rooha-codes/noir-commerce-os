import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import {
  HeroSection,
  CollectionSection,
  StorySection,
} from "@/features/home"

export function HomePage() {
  return (
    <RootLayout navbar="home" showFooter>
      <HeroSection />
      <CollectionSection />
      <StorySection />
      <CartDrawer />
    </RootLayout>
  )
}

export default HomePage
