import { cn } from "@/utils/cn"

type ImageSkeletonProps = {
  className?: string
  aspectRatio?: string
}

export function ImageSkeleton({ className, aspectRatio = "aspect-[3/4]" }: ImageSkeletonProps) {
  return (
    <div
      className={cn(
        "relative w-full animate-pulse overflow-hidden bg-white/4",
        aspectRatio,
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/3 to-transparent" />
    </div>
  )
}