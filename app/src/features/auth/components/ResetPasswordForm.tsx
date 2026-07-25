import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { PasswordField } from "./PasswordField"
import { resetPasswordSchema } from "../schemas/resetPasswordSchema"
import type { ResetPasswordSchema } from "../schemas/resetPasswordSchema"
import { ROUTES } from "@/constants/routes"

type ResetPasswordFormProps = {
  onSubmit: (data: ResetPasswordSchema) => Promise<void>
  isSubmitting?: boolean
}

export function ResetPasswordForm({
  onSubmit,
  isSubmitting = false,
}: ResetPasswordFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onBlur",
  })

  const passwordValue = useWatch({
  control,
  name: "password",
})

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <PasswordField
        {...register("password")}
        label="New Password"
        placeholder="Enter new password"
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
        label="Confirm New Password"
        placeholder="Confirm your new password"
        autoComplete="new-password"
        error={errors.confirmPassword?.message}
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
        Reset Password
      </Button>

      <p className="text-center text-body-sm text-muted">
        Back to{" "}
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