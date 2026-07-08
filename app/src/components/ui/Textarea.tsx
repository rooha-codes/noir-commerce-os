import type { TextareaHTMLAttributes } from "react"
import { forwardRef, useId } from "react"
import { cn } from "@/utils/cn"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
      rows = 5,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId()
    const textareaId = id ?? generatedId
    const helperId = `${textareaId}-helper`
    const errorId = `${textareaId}-error`
    const describedBy = error ? errorId : helperText ? helperId : undefined

    return (
      <div className={cn("flex flex-col gap-2", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-label uppercase text-muted"
          >
            {label}
            {required && <span className="ml-1 text-danger">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy}
          className={cn(
            "w-full resize-y rounded-sm border border-border bg-surface px-4 py-3 text-body-sm text-foreground placeholder:text-muted-soft transition-colors duration-normal ease-standard focus-visible:outline-none focus-visible:border-border-strong focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:cursor-not-allowed disabled:opacity-40",
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

Textarea.displayName = "Textarea"