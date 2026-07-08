import type { HTMLAttributes } from "react"
import { cn } from "@/utils/cn"

type DividerProps = HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical"
  label?: string
}

export function Divider({
  orientation = "horizontal",
  label,
  className,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("h-full w-px bg-border", className)}
        {...props}
      />
    )
  }

  if (label) {
    return (
      <div className={cn("flex items-center gap-4", className)} {...props}>
        <span role="separator" className="h-px flex-1 bg-border" />
        <span className="text-label uppercase text-muted">{label}</span>
        <span role="separator" className="h-px flex-1 bg-border" />
      </div>
    )
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn("h-px w-full bg-border", className)}
      {...props}
    />
  )
}