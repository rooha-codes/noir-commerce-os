import type { InputHTMLAttributes } from "react"
import { forwardRef, useId } from "react"
import { cn } from "@/utils/cn"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
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
      ...props
    },
    ref,
  ) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const helperId = `${inputId}-helper`
    const errorId = `${inputId}-error`
    const describedBy = error ? errorId : helperText ? helperId : undefined

    return (
      <div className={cn("flex flex-col gap-2", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-label uppercase text-muted"
          >
            {label}
            {required && <span className="ml-1 text-danger">*</span>}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy}
          className={cn(
            "h-12 w-full rounded-sm border border-border bg-surface px-4 text-body-sm text-foreground placeholder:text-muted-soft transition-colors duration-normal ease-standard focus-visible:outline-none focus-visible:border-border-strong focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:cursor-not-allowed disabled:opacity-40",
            error && "border-danger focus-visible:ring-danger/30",
            className,
          )}
          {...props}
        />

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

Input.displayName = "Input"