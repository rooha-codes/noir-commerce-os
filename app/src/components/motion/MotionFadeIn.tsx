import type { HTMLMotionProps } from "framer-motion"
import { motion } from "framer-motion"

type MotionFadeInProps = HTMLMotionProps<"div"> & {
  delay?: number
  duration?: number
}

export function MotionFadeIn({
  delay = 0,
  duration = 0.8,
  initial,
  animate,
  transition,
  children,
  ...props
}: MotionFadeInProps) {
  return (
    <motion.div
      initial={initial ?? { y: 40, opacity: 0 }}
      animate={animate ?? { y: 0, opacity: 1 }}
      transition={transition ?? { delay, duration }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
