import type { HTMLAttributes } from "react"
import { cn } from "@/utils/cn"

export type BadgeVariant = "default" | "success" | "warning" | "danger" | "muted"

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "border-border-strong text-foreground",
  success: "border-success/40 text-success",
  warning: "border-warning/40 text-warning",
  danger: "border-danger/40 text-danger",
  muted: "border-border text-muted",
}

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-label uppercase",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}