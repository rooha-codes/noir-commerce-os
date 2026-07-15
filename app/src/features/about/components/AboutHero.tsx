import { MotionFadeIn } from "@/components/motion/MotionFadeIn"
import { MotionFadeInImage } from "@/components/motion/MotionFadeInImage"
import type { AboutHeroContent } from "@/features/about/types"

type AboutHeroProps = {
  content: AboutHeroContent
}

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden px-5 pb-14 pt-32 md:px-10 md:pb-20">
      <MotionFadeInImage
        src={content.image}
        alt="NOIR studio garment detail"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      <div className="relative z-10 max-w-2xl">
        <MotionFadeIn delay={0.3}>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/50">
            {content.eyebrow}
          </p>
          <h1 className="mb-6 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            {content.title}
          </h1>
          <p className="text-lg leading-relaxed text-white/65 md:text-xl">
            {content.body}
          </p>
        </MotionFadeIn>
      </div>
    </section>
  )
}