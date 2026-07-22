import { useCallback, useState } from "react"

import { AuthLayout } from "@/features/auth/components/AuthLayout"
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm"
import type { ResetPasswordSchema } from "@/features/auth/schemas/resetPasswordSchema"

export default function ResetPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(async (data: ResetPasswordSchema) => {
    void data
    setIsSubmitting(true)

    try {
      await Promise.resolve()
    } finally {
      setIsSubmitting(false)
    }
  }, [])

  return (
    <AuthLayout
      title="New Password"
      subtitle="Create a new password for your account"
    >
      <ResetPasswordForm
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </AuthLayout>
  )
}