import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema"
import type { ForgotPasswordSchema } from "../schemas/forgotPasswordSchema"
import { ROUTES } from "@/constants/routes"

type ForgotPasswordFormProps = {
  onSubmit: (data: ForgotPasswordSchema) => Promise<void>
  isSubmitting?: boolean
}

export function ForgotPasswordForm({
  onSubmit,
  isSubmitting = false,
}: ForgotPasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
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

      <Button
        type="submit"
        variant="primary"
        size="md"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        Send Reset Link
      </Button>

      <p className="text-center text-body-sm text-muted">
        Remember your password?{" "}
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