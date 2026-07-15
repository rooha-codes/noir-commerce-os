import { MotionRevealOnScroll } from "@/components/motion/MotionRevealOnScroll"
import { Container } from "@/components/ui/Container"
import { cn } from "@/utils/cn"
import type { AboutSectionContent } from "@/features/about/types"

type AboutSectionProps = {
  content: AboutSectionContent
  index: number
}

/**
 * Reusable image/text block used for Philosophy, Craftsmanship, Materials,
 * Design Approach, and Vision. `imagePosition` is authored per-section
 * (rather than derived purely from index) so the editorial rhythm of the
 * page is a deliberate content decision, not an accident of array order.
 */
export function AboutSection({ content, index }: AboutSectionProps) {
  const imageOnRight = content.imagePosition === "right"

  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <MotionRevealOnScroll
          index={index}
          className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
        >
          <div className={cn("aspect-[4/5] overflow-hidden bg-white/5", imageOnRight && "md:order-2")}>
            <img
              src={content.image}
              alt={content.title}
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