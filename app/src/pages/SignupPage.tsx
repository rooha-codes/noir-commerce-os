import { useCallback, useState } from "react"
import { AuthLayout } from "@/features/auth/components/AuthLayout"
import { SignupForm } from "@/features/auth/components/SignupForm"
import type { SignupSchema } from "@/features/auth/schemas/signupSchema"

export default function SignupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(async (data: SignupSchema) => {
    void data
    setIsSubmitting(true)

    try {
      // Reserved for real authentication integration.
      await Promise.resolve()
    } finally {
      setIsSubmitting(false)
    }
  }, [])

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join NOIR and elevate your experience"
    >
      <SignupForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </AuthLayout>
  )
}