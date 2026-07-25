import type { HTMLMotionProps } from "framer-motion"
import { motion } from "framer-motion"

type MotionFadeInImageProps = HTMLMotionProps<"img">

export function MotionFadeInImage({
  initial,
  animate,
  transition,
  decoding = "async",
  ...props
}: MotionFadeInImageProps) {
  return (
    <motion.img
      initial={initial ?? { scale: 1.15, opacity: 0 }}
      animate={animate ?? { scale: 1, opacity: 1 }}
      transition={transition ?? {
        duration: 1.2,
        ease: "easeOut",
      }}
      decoding={decoding}
      {...props}
    />
  )
}

export default MotionFadeInImage