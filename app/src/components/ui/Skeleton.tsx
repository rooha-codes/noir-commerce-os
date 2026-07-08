import type { HTMLAttributes } from "react"
import { cn } from "@/utils/cn"

type SkeletonProps = HTMLAttributes<HTMLDivElement>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-sm bg-white/5", className)}
      {...props}
    />
  )
}