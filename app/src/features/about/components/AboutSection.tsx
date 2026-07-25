import fallbackImage from "@/assets/hero.png"
import { MotionRevealOnScroll } from "@/components/motion/MotionRevealOnScroll"
import { Container } from "@/components/ui/Container"
import type { AboutSectionContent } from "@/features/about/types"
import { cn } from "@/utils/cn"

type AboutSectionProps = {
  content: AboutSectionContent
  index: number
}

export function AboutSection({
  content,
  index,
}: AboutSectionProps) {
  const imageOnRight = content.imagePosition === "right"

  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <MotionRevealOnScroll
          index={index}
          className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
        >
          <div
            className={cn(
              "aspect-4/5 overflow-hidden bg-white/5",
              imageOnRight && "md:order-2",
            )}
          >
            <img
              src={content.image}
              alt={`${content.title} editorial image`}
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = fallbackImage
              }}
              className="h-full w-full object-cover"
            />
          </div>

          <div className={cn(imageOnRight && "md:order-1")}>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">
              {content.eyebrow}
            </p>

            <h2 className="mb-5 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              {content.title}
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-white/55">
              {content.body}
            </p>
          </div>
        </MotionRevealOnScroll>
      </Container>
    </section>
  )
}

export default AboutSection