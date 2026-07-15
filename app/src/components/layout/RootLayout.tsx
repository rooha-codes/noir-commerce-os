import type { ReactNode } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { ProductNavbar } from "@/components/layout/ProductNavbar"
import { Footer } from "@/components/layout/Footer"
import { SearchOverlay } from "@/features/search/components/SearchOverlay"
import { MobileMenu } from "@/components/layout/MobileMenu"

type RootLayoutProps = {
  children: ReactNode
  navbar?: "home" | "product" | "none"
  showFooter?: boolean
}

export function RootLayout({
  children,
  navbar = "home",
  showFooter = false,
}: RootLayoutProps) {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f6f1e8]">
      {navbar === "home" && <Navbar />}
      {navbar === "product" && <ProductNavbar />}
      {children}
      {showFooter && <Footer />}
      <SearchOverlay />
      <MobileMenu />
    </main>
  )
}