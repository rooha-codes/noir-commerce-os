import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { supabase } from "@/lib/supabase"
import {
  AuthContext,
  type AuthState,
} from "./auth-context"

const initialState: AuthState = {
  user: null,
  session: null,
  isLoading: true,
  isAuthenticated: false,
}

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>(initialState)
  const mountedRef = useRef(true)

  const refreshSession = useCallback(async () => {
    const { data, error } = await supabase.auth.getSession()

    if (!mountedRef.current) return

    if (error) {
      setState({
        user: null,
        session: null,
        isLoading: false,
        isAuthenticated: false,
      })
      return
    }

    setState({
      user: data.session?.user ?? null,
      session: data.session ?? null,
      isLoading: false,
      isAuthenticated: Boolean(data.session),
    })
  }, [])

  const signUp = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    return { error }
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    return { error }
  }, [])

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut()

    if (error || !mountedRef.current) return

    setState({
      user: null,
      session: null,
      isLoading: false,
      isAuthenticated: false,
    })
  }, [])

  useEffect(() => {
    mountedRef.current = true

    void supabase.auth.getSession().then(({ data, error }) => {
      if (!mountedRef.current) return

      if (error) {
        setState({
          user: null,
          session: null,
          isLoading: false,
          isAuthenticated: false,
        })
        return
      }

      setState({
        user: data.session?.user ?? null,
        session: data.session ?? null,
        isLoading: false,
        isAuthenticated: Boolean(data.session),
      })
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mountedRef.current) return

      setState({
        user: session?.user ?? null,
        session,
        isLoading: false,
        isAuthenticated: Boolean(session),
      })
    })

    return () => {
      mountedRef.current = false
      subscription.unsubscribe()
    }
  }, [])

  const value = useMemo(
    () => ({
      ...state,
      signUp,
      signIn,
      signOut,
      refreshSession,
    }),
    [state, signUp, signIn, signOut, refreshSession],
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}