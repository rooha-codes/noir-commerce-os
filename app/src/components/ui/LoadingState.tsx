import { cn } from "@/utils/cn"
import { Spinner } from "@/components/ui/Spinner"

type LoadingStateProps = {
  message?: string
  className?: string
}

export function LoadingState({ message = "Loading", className }: LoadingStateProps) {
  return (
    <div
      role="status"
      className={cn("flex flex-col items-center justify-center gap-4 px-6 py-16 text-center", className)}
    >
      <Spinner size="lg" label={message} />
      <p className="text-body-sm text-muted">{message}</p>
    </div>
  )
}