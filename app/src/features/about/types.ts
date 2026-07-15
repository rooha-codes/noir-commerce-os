/**
 * Sprint 3 · Batch 3 — About feature types.
 */

export type AboutHeroContent = {
  eyebrow: string
  title: string
  body: string
  image: string
}

export type AboutSectionContent = {
  id: string
  eyebrow: string
  title: string
  body: string
  image: string
  imagePosition: "left" | "right"
}

export type AboutCTAContent = {
  eyebrow: string
  title: string
  body: string
}