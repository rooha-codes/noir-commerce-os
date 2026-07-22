import { useCallback, useState } from "react"

import { AuthLayout } from "@/features/auth/components/AuthLayout"
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm"
import type { ForgotPasswordSchema } from "@/features/auth/schemas/forgotPasswordSchema"

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(async (data: ForgotPasswordSchema) => {
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
      title="Reset Password"
      subtitle="Enter your email and we will send you a reset link"
    >
      <ForgotPasswordForm
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </AuthLayout>
  )
}