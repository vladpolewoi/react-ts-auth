import { createContext, useContext, useEffect, useState } from 'react'
import supabase from '@/supabase/client'
import { User, Session } from '@supabase/supabase-js'

type AuthContextData = {
  user: User | null
  session: Session | null
  loginWithGithub: () => Promise<any>
  logout: () => Promise<any>
}
type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      setSession(session)
      setUser(session?.user ?? null)

      if (error) {
        console.error('ERR', error)
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  async function loginWithGithub() {
    return supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  async function logout() {
    return supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, session, logout, loginWithGithub }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
