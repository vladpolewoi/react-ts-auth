import { createContext, useContext, useState } from 'react'

type AuthContextData = {
  user: string
  signIn: (email: string, password: string) => Promise<any>
  signUp: (email: string, password: string) => Promise<any>
  signOut: () => Promise<any>
}
type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState('')

  function signIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password !== '123456') {
          reject('Invalid password')
        }
        setUser(email)
        resolve('Success')
      }, 2000)
    })
  }

  function signUp(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setUser(email)
        resolve('')
      }, 2000)
    })
  }

  function signOut() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setUser('')
        resolve('')
      }, 2000)
    })
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
