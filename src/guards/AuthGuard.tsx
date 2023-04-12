import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

type AuthGuardProps = {
  children: JSX.Element
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    // TODO: test how replace and state working after login
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
