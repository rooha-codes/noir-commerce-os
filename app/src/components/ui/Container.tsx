import type { HTMLAttributes } from "react"
import { cn } from "@/utils/cn"

export type ContainerSize = "narrow" | "default" | "wide" | "full"

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize
}

/**
 * Centralizes the `px-5 md:px-10` horizontal padding pattern already
 * repeated across HeroSection, ProductPage, RelatedProductsSection, etc.
 * Purely a wrapper — does not replace any existing markup on its own.
 */
const sizeStyles: Record<ContainerSize, string> = {
  narrow: "max-w-3xl",
  default: "max-w-[1600px]",
  wide: "max-w-[1920px]",
  full: "max-w-none",
}

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 md:px-10", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  )
}