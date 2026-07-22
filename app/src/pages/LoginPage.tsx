import { useCallback, useState } from "react"
import { AuthLayout } from "@/features/auth/components/AuthLayout"
import { LoginForm } from "@/features/auth/components/LoginForm"
import type { LoginSchema } from "@/features/auth/schemas/loginSchema"

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(async (data: LoginSchema) => {
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
      title="Welcome Back"
      subtitle="Sign in to your NOIR account"
    >
      <LoginForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </AuthLayout>
  )
}