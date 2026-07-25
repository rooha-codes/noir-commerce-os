import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./useAuth"
import { ROUTES } from "@/constants/routes"

export function useCheckoutRedirect() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  const goToCheckout = useCallback(() => {
    if (isAuthenticated) {
      navigate(ROUTES.CHECKOUT)
    } else {
      navigate(ROUTES.LOGIN, {
        state: { from: ROUTES.CHECKOUT },
      })
    }
  }, [isAuthenticated, navigate])

  return goToCheckout
}