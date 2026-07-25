import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { AuthLoading } from "./AuthLoading"
import { ROUTES } from "@/constants/routes"

export function GuestRoute() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <AuthLoading />
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />
  }

  return <Outlet />
}