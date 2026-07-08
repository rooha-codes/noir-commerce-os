import type { ButtonHTMLAttributes, ReactNode } from "react"
import { forwardRef } from "react"
import { cn } from "@/utils/cn"
import { Spinner } from "@/components/ui/Spinner"

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger"
export type ButtonSize = "sm" | "md" | "lg" | "icon"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-button font-medium uppercase transition-[background-color,color,border-color,transform,opacity] duration-normal ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40"

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:scale-[1.01] active:scale-[0.99]",
  secondary:
    "bg-surface-elevated text-foreground border border-border hover:border-border-strong hover:bg-white/[0.06]",
  ghost: "bg-transparent text-foreground hover:bg-white/5",
  outline:
    "bg-transparent text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary",
  danger: "bg-danger text-white hover:opacity-90 active:scale-[0.99]",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[0.75rem]",
  md: "h-11 px-6",
  lg: "h-13 px-8 text-[0.9375rem]",
  icon: "h-10 w-10 p-0",
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {loading ? (
          <>
            <Spinner size="sm" className="shrink-0" />
            <span className="opacity-0">{children}</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  },
)

Button.displayName = "Button"