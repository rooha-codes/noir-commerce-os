import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/utils/cn"

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  label: string
}

export function IconButton({
  children,
  label,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button aria-label={label} className={cn(className)} {...props}>
      {children}
    </button>
  )
}
