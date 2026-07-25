import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { PasswordField } from "./PasswordField"
import { signupSchema } from "../schemas/signupSchema"
import type { SignupSchema } from "../schemas/signupSchema"
import { ROUTES } from "@/constants/routes"

type SignupFormProps = {
  onSubmit: (data: SignupSchema) => Promise<void>
  isSubmitting?: boolean
}

export function SignupForm({ onSubmit, isSubmitting = false }: SignupFormProps) {
  const {
  register,
  handleSubmit,
  control,
  formState: { errors },
} = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  })

  const passwordValue = useWatch({
  control,
  name: "password",
})

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input
        {...register("email")}
        type="email"
        label="Email"
        placeholder="you@example.com"
        autoComplete="email"
        error={errors.email?.message}
        fullWidth
        disabled={isSubmitting}
      />

      <PasswordField
        {...register("password")}
        label="Password"
        placeholder="Create a password"
        autoComplete="new-password"
        error={errors.password?.message}
        helperText={
          passwordValue && passwordValue.length > 0
            ? undefined
            : "Min 8 chars, uppercase, lowercase, number, special char"
        }
        fullWidth
        disabled={isSubmitting}
      />

      <PasswordField
        {...register("confirmPassword")}
        label="Confirm Password"
        placeholder="Confirm your password"
        autoComplete="new-password"
        error={errors.confirmPassword?.message}
        fullWidth
        disabled={isSubmitting}
      />

      <div className="flex items-start gap-3">
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <input
            {...register("acceptTerms")}
            type="checkbox"
            disabled={isSubmitting}
            className="peer absolute inset-0 h-5 w-5 cursor-pointer appearance-none rounded-xs border border-border bg-surface transition-colors duration-normal ease-standard checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none relative hidden text-primary-foreground peer-checked:block"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <label className="cursor-pointer select-none">
          <span className="text-body-sm text-foreground">
            I agree to the{" "}
            <Link
              to={ROUTES.HOME}
              className="underline underline-offset-4 transition-colors duration-normal hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to={ROUTES.HOME}
              className="underline underline-offset-4 transition-colors duration-normal hover:text-primary"
            >
              Privacy Policy
            </Link>
          </span>
          {errors.acceptTerms && (
            <p className="mt-0.5 text-body-sm text-danger">
              {errors.acceptTerms.message}
            </p>
          )}
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        Create Account
      </Button>

      <p className="text-center text-body-sm text-muted">
        Already have an account?{" "}
        <Link
          to={ROUTES.LOGIN}
          className="text-foreground underline underline-offset-4 transition-colors duration-normal hover:text-primary"
        >
          Sign in
        </Link>
      </p>
    </form>
  )
}