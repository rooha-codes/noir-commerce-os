import type { SelectHTMLAttributes } from "react"
import { forwardRef, useId } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/utils/cn"

type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> & {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      required,
      disabled,
      id,
      className,
      options,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId()
    const selectId = id ?? generatedId
    const helperId = `${selectId}-helper`
    const errorId = `${selectId}-error`
    const describedBy = error ? errorId : helperText ? helperId : undefined

    return (
      <div className={cn("flex flex-col gap-2", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-label uppercase text-muted"
          >
            {label}
            {required && <span className="ml-1 text-danger">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={describedBy}
            className={cn(
              "h-12 w-full appearance-none rounded-sm border border-border bg-surface px-4 pr-10 text-body-sm text-foreground transition-colors duration-normal ease-standard focus-visible:outline-none focus-visible:border-border-strong focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:cursor-not-allowed disabled:opacity-40",
              error && "border-danger focus-visible:ring-danger/30",
              className,
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
          />
        </div>

        {error ? (
          <p id={errorId} className="text-body-sm text-danger">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-body-sm text-muted">
            {helperText}
          </p>
        ) : null}
      </div>
    )
  },
)

Select.displayName = "Select"