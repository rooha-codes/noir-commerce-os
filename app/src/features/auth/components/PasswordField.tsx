import { forwardRef, useState } from "react"
import type { InputHTMLAttributes } from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/utils/cn"

type PasswordFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      disabled,
      id,
      className,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(false)
    const inputId = id ?? `password-field-${Math.random().toString(36).slice(2, 9)}`
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
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={visible ? "text" : "password"}
            disabled={disabled}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={describedBy}
            className={cn(
              "h-12 w-full rounded-sm border border-border bg-surface px-4 pr-12 text-body-sm text-foreground placeholder:text-muted-soft transition-colors duration-normal ease-standard focus-visible:outline-none focus-visible:border-border-strong focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:cursor-not-allowed disabled:opacity-40",
              error && "border-danger focus-visible:ring-danger/30",
              className,
            )}
            {...props}
          />

          <button
            type="button"
            onClick={() => setVisible((prev) => !prev)}
            disabled={disabled}
            tabIndex={-1}
            aria-label={visible ? "Hide password" : "Show password"}
            aria-pressed={visible}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-soft transition-colors duration-normal hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:opacity-40"
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
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

PasswordField.displayName = "PasswordField"