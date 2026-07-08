import type { ReactNode } from "react"
import { AlertCircle } from "lucide-react"
import { cn } from "@/utils/cn"
import { Button } from "@/components/ui/Button"

type ErrorStateProps = {
  title?: string
  description?: string
  onRetry?: () => void
  retryLabel?: string
  icon?: ReactNode
  className?: string
}

export function ErrorState({
  title = "Something went wrong",
  description = "Please try again in a moment.",
  onRetry,
  retryLabel = "Try again",
  icon,
  className,
}: ErrorStateProps) {
  return (
    <div role="alert" className={cn("flex flex-col items-center justify-center px-6 py-16 text-center", className)}>
      <div className="mb-5 text-danger">{icon ?? <AlertCircle size={40} strokeWidth={1.5} />}</div>
      <h3 className="text-heading-sm text-foreground">{title}</h3>
      <p className="mt-3 max-w-sm text-body-sm text-muted">{description}</p>
      {onRetry && (
        <Button variant="outline" size="sm" className="mt-6" onClick={onRetry}>
          {retryLabel}
        </Button>
      )}
    </div>
  )
}