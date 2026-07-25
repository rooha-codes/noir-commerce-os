import { createContext } from "react"
import type {
  AuthError as SupabaseAuthError,
  Session,
  User,
} from "@supabase/supabase-js"

export interface AuthState {
  user: User | null
  session: Session | null
  isLoading: boolean
  isAuthenticated: boolean
}

export type AuthActionResult = {
  error: SupabaseAuthError | null
}

export interface AuthContextValue extends AuthState {
  signUp: (email: string, password: string) => Promise<AuthActionResult>
  signIn: (email: string, password: string) => Promise<AuthActionResult>
  signOut: () => Promise<void>
  refreshSession: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
)