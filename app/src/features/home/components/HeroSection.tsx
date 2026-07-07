import { ArrowUpRight } from "lucide-react"
import { MotionFadeIn } from "@/components/motion/MotionFadeIn"
import { MotionFadeInImage } from "@/components/motion/MotionFadeInImage"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-16">
      <MotionFadeInImage
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1800&auto=format&fit=crop"
        alt="Premium fashion campaign"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

      <div className="relative z-10 grid w-full gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <MotionFadeIn delay={0.4}>
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/60">
            Premium Clothing
          </p>

          <h1 className="max-w-5xl text-6xl font-medium leading-[0.9] tracking-[-0.08em] md:text-9xl">
            Designed for quiet confidence.
          </h1>
        </MotionFadeIn>

        <MotionFadeIn
          delay={0.7}
          initial={{ y: 30, opacity: 0 }}
          className="max-w-md md:justify-self-end"
        >
          <p className="mb-6 text-lg leading-relaxed text-white/70">
            A premium fashion commerce experience built around strong
            silhouettes, refined motion, and effortless shopping.
          </p>

          <a
            href="#shop"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
          >
            Shop Collection <ArrowUpRight size={18} />
          </a>
        </MotionFadeIn>
      </div>
    </section>
  )
}
