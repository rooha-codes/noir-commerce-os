import type { ReactNode } from "react"
import { cn } from "@/utils/cn"

type EmptyStateProps = {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-20 text-center md:py-28",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      {icon && (
        <div className="mb-6 text-white/20" aria-hidden="true">
          {icon}
        </div>
      )}
      <h2 className="text-xl font-medium tracking-[-0.02em] text-white/90 md:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/45">
          {description}
        </p>
      )}
      {action && <div className="mt-8">{action}</div>}
    </div>
  )
}