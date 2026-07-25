export function AuthLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen items-center justify-center bg-background"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border-strong border-t-primary" />
      <span className="sr-only">Loading authentication...</span>
    </div>
  )
}