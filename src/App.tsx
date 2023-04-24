import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { MNavbar } from '@/components'

import SignUpPage from '@/pages/SignUpPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import ErrorPage from '@/pages/ErrorPage'
import NotFoundPage from '@/pages/NotFoundPage'
import SecretPage from '@/pages/SecretPage'

import AuthGuard from '@/guards/AuthGuard'

export default function App() {
  // to prevent transition on page first load
  useEffect(() => {
    document.body.classList.add('backgroundPattern')
  }, [])

  return (
    <>
      <MNavbar />
      <Routes>
        <Route
          path="/"
          errorElement={<ErrorPage />}
          element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          }
        />
        <Route
          path="/secret"
          errorElement={<ErrorPage />}
          element={
            <AuthGuard>
              <SecretPage />
            </AuthGuard>
          }
        />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
