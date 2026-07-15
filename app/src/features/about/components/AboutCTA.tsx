import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { ROUTES } from "@/constants/routes"
import { Container } from "@/components/ui/Container"
import { MotionFadeIn } from "@/components/motion/MotionFadeIn"
import type { AboutCTAContent } from "@/features/about/types"

type AboutCTAProps = {
  content: AboutCTAContent
}

export function AboutCTA({ content }: AboutCTAProps) {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container size="narrow" className="text-center">
        <MotionFadeIn>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">
            {content.eyebrow}
          </p>
          <h2 className="mx-auto mb-6 max-w-xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-white/55">{content.body}</p>

          <Link
            to={ROUTES.shop}
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
          >
            Shop The Collection <ArrowUpRight size={18} />
          </Link>
        </MotionFadeIn>
      </Container>
    </section>
  )
}