import { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import SignUpPage from '@/pages/SignUpPage'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Supabase from '@/supabase/client'

export default function App() {
  // const [session, setSession] = useState<Session | null>(null)

  // useEffect(() => {
  //   console.log('Check session: ', session)
  //   Supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   const {
  //     data: { subscription },
  //   } = Supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })

  //   return () => subscription.unsubscribe()
  // }, [])

  return (
    <ThemeProvider>
      <ThemeToggle />
      <SignUpPage />
    </ThemeProvider>
  )
}
