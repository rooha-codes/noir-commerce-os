import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { PasswordField } from "./PasswordField"
import { loginSchema } from "../schemas/loginSchema"
import type { LoginSchema } from "../schemas/loginSchema"
import { ROUTES } from "@/constants/routes"

type LoginFormProps = {
  onSubmit: (data: LoginSchema) => Promise<void>
  isSubmitting?: boolean
}

export function LoginForm({ onSubmit, isSubmitting = false }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
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
        placeholder="Enter your password"
        autoComplete="current-password"
        error={errors.password?.message}
        fullWidth
        disabled={isSubmitting}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            disabled={isSubmitting}
            className="h-4 w-4 rounded-xs border border-border bg-surface text-primary accent-primary cursor-pointer appearance-none checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40"
          />
          <span className="text-body-sm text-muted">Remember me</span>
        </label>

        <Link
          to={ROUTES.FORGOT_PASSWORD}
          className="text-body-sm text-muted transition-colors duration-normal hover:text-foreground"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        Sign In
      </Button>

      <p className="text-center text-body-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link
          to={ROUTES.SIGNUP}
          className="text-foreground underline underline-offset-4 transition-colors duration-normal hover:text-primary"
        >
          Sign up
        </Link>
      </p>
    </form>
  )
}