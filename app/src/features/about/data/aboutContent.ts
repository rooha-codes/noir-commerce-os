import type {
  AboutCTAContent,
  AboutHeroContent,
  AboutSectionContent,
} from "@/features/about/types"

/**
 * Static NOIR editorial content.
 *
 * Images use the same fashion photography sources already used
 * throughout the project. Broken image URLs have been removed.
 */

export const ABOUT_HERO: AboutHeroContent = {
  eyebrow: "Our Story",
  title: "Built for the long wear.",
  body:
    "NOIR began as a study in restraint — a small collection of pieces designed to outlast the seasons they were made for. We build garments around structure, fabric weight, and quiet detail, rather than trend.",
  image:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
}

export const ABOUT_SECTIONS: AboutSectionContent[] = [
  {
    id: "philosophy",
    eyebrow: "Philosophy",
    title: "Design by subtraction.",
    body:
      "Every piece is reduced until only what matters remains — no decoration without purpose, no seam without reason. If a detail does not earn its place, it does not ship.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1400&auto=format&fit=crop",
    imagePosition: "right",
  },
  {
    id: "craftsmanship",
    eyebrow: "Craftsmanship",
    title: "Considered construction.",
    body:
      "The Structured Oversized Coat went through eleven pattern revisions before release, each one adjusting the shoulder by millimeters until the silhouette held its line at rest and in motion. That level of iteration is standard, not exceptional.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1400&auto=format&fit=crop",
    imagePosition: "left",
  },
  {
    id: "materials",
    eyebrow: "Materials",
    title: "Weight over polish.",
    body:
      "We work with heavy wools, dense cottons, and finishes chosen for how they wear over years, not how they photograph in a single shoot. Lighter fabrics look cleaner on day one and rarely age well.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1400&auto=format&fit=crop",
    imagePosition: "right",
  },
  {
    id: "design-approach",
    eyebrow: "Design Approach",
    title: "Structure before decoration.",
    body:
      "Silhouettes are built around structure and drape first, so a piece holds its shape long after the first fitting. Color, trim, and finish are the last decisions we make, not the first.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop",
    imagePosition: "left",
  },
  {
    id: "vision",
    eyebrow: "Vision",
    title: "A wardrobe, not a wardrobe change.",
    body:
      "We release fewer pieces than most studios our size. Every addition has to earn a place next to what already exists, so the collection grows slowly, deliberately, and stays wearable for years — not just a season.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
    imagePosition: "right",
  },
]

export const ABOUT_CTA: AboutCTAContent = {
  eyebrow: "Continue Exploring",
  title: "See the philosophy in the pieces themselves.",
  body:
    "Every principle above is built into what is currently in the collection — structure, fabric weight, and restraint, worn rather than read about.",
}