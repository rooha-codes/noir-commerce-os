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
    <div className={cn("flex flex-col items-center justify-center px-6 py-16 text-center", className)}>
      {icon && <div className="mb-5 text-muted-soft">{icon}</div>}
      <h3 className="text-heading-sm text-foreground">{title}</h3>
      {description && <p className="mt-3 max-w-sm text-body-sm text-muted">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}