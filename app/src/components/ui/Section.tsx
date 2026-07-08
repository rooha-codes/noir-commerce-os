import type { ElementType, HTMLAttributes, ReactNode } from "react"
import { cn } from "@/utils/cn"

export type SectionSpacing = "sm" | "md" | "lg" | "none"

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  spacing?: SectionSpacing
  children: ReactNode
}

const spacingStyles: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-20 md:py-24",
  lg: "py-24 md:py-32",
}

export function Section({
  as: Component = "section",
  spacing = "md",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component className={cn(spacingStyles[spacing], className)} {...props}>
      {children}
    </Component>
  )
}