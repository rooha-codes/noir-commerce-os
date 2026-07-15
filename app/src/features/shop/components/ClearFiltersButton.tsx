import { Button } from "@/components/ui/Button"

type ClearFiltersButtonProps = {
  onClick: () => void
  disabled?: boolean
  className?: string
}

export function ClearFiltersButton({ onClick, disabled, className }: ClearFiltersButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      Clear Filters
    </Button>
  )
}