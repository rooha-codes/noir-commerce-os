import type { HTMLAttributes, KeyboardEvent } from "react"
import { forwardRef } from "react"
import { cn } from "@/utils/cn"

export type CardVariant = "default" | "elevated" | "interactive"

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant
}

const variantStyles: Record<CardVariant, string> = {
  default: "border border-border bg-surface",
  elevated: "border border-border bg-surface-elevated shadow-elevated",
  interactive:
    "border border-border bg-surface transition-[border-color,transform,box-shadow] duration-normal ease-standard hover:-translate-y-0.5 hover:border-border-strong hover:shadow-elevated cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className, onClick, onKeyDown, children, ...props }, ref) => {
    const isInteractive = variant === "interactive"

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event)
      if (isInteractive && onClick && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault()
        event.currentTarget.click()
      }
    }

    return (
      <div
        ref={ref}
        role={isInteractive && onClick ? "button" : undefined}
        tabIndex={isInteractive && onClick ? 0 : undefined}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className={cn("rounded-md p-6", variantStyles[variant], className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Card.displayName = "Card"