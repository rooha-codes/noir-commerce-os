import { ROUTES } from "@/constants/routes"

export const SITE = {
  name: "NOIR®",
  tagline: "Premium clothing commerce system. Built for luxury brands, fast shopping, and refined digital experiences.",
} as const

export const NAV_LINKS = [
  { label: "Shop", href: ROUTES.shop },
  { label: "Collections", href: ROUTES.collections },
  { label: "About", href: ROUTES.about },
  { label: "Journal", href: ROUTES.journal },
] as const