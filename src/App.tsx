import { useEffect, useState } from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import SignUpPage from '@/pages/SignUpPage'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { ThemeProvider } from '@/contexts/ThemeContext'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(`https://${supabaseUrl}.supabase.c`, supabaseKey)

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    console.log('Check session: ')
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <ThemeProvider>
        <ThemeToggle />
        <SignUpPage />
      </ThemeProvider>
    )
  }

  return <div>Logged in!</div>
}
