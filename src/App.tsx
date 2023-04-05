import { useEffect, useState } from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import SignUpPage from '@/pages/SignUpPage'

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
    return <SignUpPage />
  }

  console.log('NOT LOGGED IN', session)

  return <div>Logged in!</div>
}
