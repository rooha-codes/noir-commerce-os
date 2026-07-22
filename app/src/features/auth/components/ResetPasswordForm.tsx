import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { useForm, useWatch } from "react-hook-form"

import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/constants/routes"
import { resetPasswordSchema } from "../schemas/resetPasswordSchema"
import type { ResetPasswordSchema } from "../schemas/resetPasswordSchema"
import { PasswordField } from "./PasswordField"

type ResetPasswordFormProps = {
  onSubmit: (data: ResetPasswordSchema) => Promise<void>
  isSubmitting?: boolean
}

export function ResetPasswordForm({
  onSubmit,
  isSubmitting: externalIsSubmitting = false,
}: ResetPasswordFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors,
      isSubmitting: formIsSubmitting,
    },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onBlur",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  const passwordValue = useWatch({
    control,
    name: "password",
    defaultValue: "",
  })

  const isSubmitting = externalIsSubmitting || formIsSubmitting

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >
      <PasswordField
        {...register("password")}
        label="New Password"
        placeholder="Enter new password"
        autoComplete="new-password"
        error={errors.password?.message}
        helperText={
          passwordValue.length > 0
            ? undefined
            : "Min 8 chars, uppercase, lowercase, number, special character"
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
          to={ROUTES.login}
          className="text-foreground underline underline-offset-4 transition-colors duration-normal hover:text-primary"
        >
          Sign in
        </Link>
      </p>
    </form>
  )
}