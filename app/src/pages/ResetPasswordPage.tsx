import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthLayout } from "@/features/auth/components/AuthLayout"
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm"
import { mapAuthError } from "@/features/auth"
import { supabase } from "@/lib/supabase"
import type { ResetPasswordSchema } from "@/features/auth/schemas/resetPasswordSchema"
import { ROUTES } from "@/constants/routes"

export default function ResetPasswordPage() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [hasRecoverySession, setHasRecoverySession] = useState<boolean | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const isRecovery = data.session?.user?.app_metadata?.provider === "email"
      setHasRecoverySession(Boolean(data.session) && isRecovery)
    })
  }, [])

  const handleSubmit = useCallback(
    async (data: ResetPasswordSchema) => {
      setSubmitError(null)
      setIsSubmitting(true)

      const { error } = await supabase.auth.updateUser({
        password: data.password,
      })

      if (error) {
        setSubmitError(mapAuthError(error))
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      navigate(ROUTES.LOGIN, { replace: true })
    },
    [navigate],
  )

  if (hasRecoverySession === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border-strong border-t-primary" />
      </div>
    )
  }

  if (!hasRecoverySession) {
    return (
      <AuthLayout
        title="Link Expired"
        subtitle="This password reset link is invalid or has expired."
      >
        <p className="text-center text-body text-muted">
          Please request a new password reset link.
        </p>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="New Password"
      subtitle="Create a new password for your account"
      footer={
        submitError ? (
          <p className="text-center text-body-sm text-danger">{submitError}</p>
        ) : undefined
      }
    >
      <ResetPasswordForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </AuthLayout>
  )
}