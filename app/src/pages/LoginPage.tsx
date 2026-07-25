import { useCallback, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AuthLayout } from "@/features/auth/components/AuthLayout"
import { LoginForm } from "@/features/auth/components/LoginForm"
import { useAuth, mapAuthError } from "@/features/auth"
import type { LoginSchema } from "@/features/auth/schemas/loginSchema"
import { ROUTES } from "@/constants/routes"

function isSafeInternalPath(path: string): boolean {
  return path.startsWith("/") && !path.startsWith("//")
}

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const from =
    typeof location.state?.from === "string" &&
    isSafeInternalPath(location.state.from)
      ? location.state.from
      : ROUTES.HOME

  const handleSubmit = useCallback(
    async (data: LoginSchema) => {
      setSubmitError(null)
      setIsSubmitting(true)

      const { error } = await signIn(data.email, data.password)

      if (error) {
        setSubmitError(mapAuthError(error))
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      navigate(from, { replace: true })
    },
    [signIn, navigate, from],
  )

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your NOIR account"
      footer={
        submitError ? (
          <p className="text-center text-body-sm text-danger">{submitError}</p>
        ) : undefined
      }
    >
      <LoginForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </AuthLayout>
  )
}