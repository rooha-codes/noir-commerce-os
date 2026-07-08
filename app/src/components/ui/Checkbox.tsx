import type { InputHTMLAttributes } from "react"
import { forwardRef, useId } from "react"
import { Check } from "lucide-react"
import { cn } from "@/utils/cn"

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string
  description?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, disabled, id, className, ...props }, ref) => {
    const generatedId = useId()
    const checkboxId = id ?? generatedId

    return (
      <div className={cn("flex items-start gap-3", className)}>
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            className="peer absolute inset-0 h-5 w-5 cursor-pointer appearance-none rounded-xs border border-border bg-surface transition-colors duration-normal ease-standard checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40"
            {...props}
          />
          <Check
            size={13}
            strokeWidth={3}
            className="pointer-events-none relative hidden text-primary-foreground peer-checked:block"
          />
        </div>

        {(label || description) && (
          <label htmlFor={checkboxId} className="cursor-pointer select-none">
            {label && <span className="text-body-sm text-foreground">{label}</span>}
            {description && (
              <p className="mt-0.5 text-body-sm text-muted">{description}</p>
            )}
          </label>
        )}
      </div>
    )
  },
)

Checkbox.displayName = "Checkbox"