import { MotionFadeIn } from "@/components/motion/MotionFadeIn"

export function JournalHero() {
  return (
    <div className="mb-14 max-w-2xl">
      <MotionFadeIn>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
          Notes From The Studio
        </p>
        <h1 className="mb-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
          Journal
        </h1>
        <p className="text-lg leading-relaxed text-white/55 md:text-xl">
          Process notes, material decisions, and the reasoning behind a
          collection that changes slowly, on purpose.
        </p>
      </MotionFadeIn>
    </div>
  )
}