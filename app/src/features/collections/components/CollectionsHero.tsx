import { MotionFadeIn } from "@/components/motion/MotionFadeIn"

/**
 * Editorial hero + introductory brand copy for /collections. Mirrors the
 * eyebrow/display-heading language already established on Home and Shop,
 * with a supporting paragraph that frames what "collections" means for
 * a studio this small (grouped by category, not by season).
 */
export function CollectionsHero() {
  return (
    <div className="mb-16 max-w-2xl">
      <MotionFadeIn>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
          Curated By Category
        </p>
        <h1 className="mb-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
          Collections
        </h1>
        <p className="text-lg leading-relaxed text-white/55 md:text-xl">
          We don't chase seasons — we build a small number of categories and
          refine them until each piece earns its place. Every collection
          below is a standing chapter in the wardrobe, not a drop that
          disappears in a month.
        </p>
      </MotionFadeIn>
    </div>
  )
}