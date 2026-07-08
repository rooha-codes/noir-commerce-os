import type { ButtonHTMLAttributes, ReactNode } from "react"
import { forwardRef } from "react"
import { cn } from "@/utils/cn"

/**
 * IconButton
 *
 * Extends the original Sprint 1 IconButton (label -> aria-label, bare
 * button + className passthrough) with variant/size support. Defaults are
 * chosen so existing call sites (Navbar search/wishlist/cart/menu buttons)
 * keep rendering exactly as before if they don't opt into a variant/size —
 * `variant="ghost"` has no background/border by default, only a subtle
 * hover wash, and `size` is optional rather than forced.
 */

export type IconButtonVariant = "ghost" | "outline" | "solid"
export type IconButtonSize = "sm" | "md" | "lg"

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  label: string
  variant?: IconButtonVariant
  size?: IconButtonSize
}

const variantStyles: Record<IconButtonVariant, string> = {
  ghost: "bg-transparent text-foreground hover:bg-white/5",
  outline:
    "bg-transparent text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary",
  solid: "bg-primary text-primary-foreground hover:opacity-90",
}

const sizeStyles: Record<IconButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { children, label, variant, size, disabled, className, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        aria-label={label}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-colors duration-normal ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
          variant && variantStyles[variant],
          size && sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

IconButton.displayName = "IconButton"