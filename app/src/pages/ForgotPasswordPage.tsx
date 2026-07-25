import { useCallback, useState } from "react"
import { AuthLayout } from "@/features/auth/components/AuthLayout"
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm"
import { mapAuthError } from "@/features/auth"
import { supabase } from "@/lib/supabase"
import type { ForgotPasswordSchema } from "@/features/auth/schemas/forgotPasswordSchema"
import { ROUTES } from "@/constants/routes"

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleSubmit = useCallback(async (data: ForgotPasswordSchema) => {
    setSubmitError(null)
    setSuccessMessage(null)
    setIsSubmitting(true)

    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${window.location.origin}${ROUTES.RESET_PASSWORD}`,
    })

    if (error) {
      setSubmitError(mapAuthError(error))
      setIsSubmitting(false)
      return
    }

    setSuccessMessage(
      "If an account exists with this email, you will receive a password reset link shortly.",
    )
    setIsSubmitting(false)
  }, [])

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email and we will send you a reset link"
      footer={
        <>
          {submitError && (
            <p className="text-center text-body-sm text-danger">{submitError}</p>
          )}
          {successMessage && (
            <p className="text-center text-body-sm text-muted">{successMessage}</p>
          )}
        </>
      }
    >
      <ForgotPasswordForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </AuthLayout>
  )
}