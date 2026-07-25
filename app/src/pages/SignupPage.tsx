import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthLayout } from "@/features/auth/components/AuthLayout"
import { SignupForm } from "@/features/auth/components/SignupForm"
import { useAuth, mapAuthError } from "@/features/auth"
import type { SignupSchema } from "@/features/auth/schemas/signupSchema"
import { ROUTES } from "@/constants/routes"

export default function SignupPage() {
  const navigate = useNavigate()
  const { signUp } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = useCallback(
    async (data: SignupSchema) => {
      setSubmitError(null)
      setIsSubmitting(true)

      const { error } = await signUp(data.email, data.password)

      if (error) {
        setSubmitError(mapAuthError(error))
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      navigate(ROUTES.HOME, { replace: true })
    },
    [signUp, navigate],
  )

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join NOIR and elevate your experience"
      footer={
        submitError ? (
          <p className="text-center text-body-sm text-danger">{submitError}</p>
        ) : undefined
      }
    >
      <SignupForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </AuthLayout>
  )
}