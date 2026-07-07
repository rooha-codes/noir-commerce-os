import type { HTMLMotionProps } from "framer-motion"
import { motion } from "framer-motion"

type MotionRevealOnScrollProps = HTMLMotionProps<"article"> & {
  index?: number
}

export function MotionRevealOnScroll({
  index = 0,
  initial,
  whileInView,
  viewport,
  transition,
  children,
  ...props
}: MotionRevealOnScrollProps) {
  return (
    <motion.article
      initial={initial ?? { y: 40, opacity: 0 }}
      whileInView={whileInView ?? { y: 0, opacity: 1 }}
      viewport={viewport ?? { once: true }}
      transition={transition ?? { delay: index * 0.08 }}
      {...props}
    >
      {children}
    </motion.article>
  )
}
