import type { AuthError } from "@supabase/supabase-js"

export function mapAuthError(error: AuthError): string {
  switch (error.message.toLowerCase()) {
    case "invalid login credentials":
      return "Invalid email or password. Please try again."
    case "email not confirmed":
      return "Please confirm your email before signing in."
    case "user already registered":
      return "An account with this email already exists."
    case "weak password":
      return "Password is too weak. Use at least 8 characters with uppercase, lowercase, number, and special character."
    case "invalid email":
      return "Please enter a valid email address."
    case "rate limit exceeded":
      return "Too many attempts. Please wait a moment and try again."
    default:
      if (error.message.includes("network")) {
        return "Network error. Please check your connection and try again."
      }
      if (error.message.includes("timeout")) {
        return "Request timed out. Please try again."
      }
      return error.message || "An unexpected error occurred. Please try again."
  }
}