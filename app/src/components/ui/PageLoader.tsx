import { Spinner } from "./Spinner"

export function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" />
        <p className="text-body text-muted">
          Loading...
        </p>
      </div>
    </div>
  )
}