import { createContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextType = {
  theme?: Theme
  toggleTheme?: () => void
}
type ThemeContextTypeProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType>({})

export const ThemeProvider = ({ children }: ThemeContextTypeProps) => {
  let defaultTheme: Theme = 'dark'
  const localStorageTheme = localStorage.getItem('theme')
  const isBrowserDefaultLight = window.matchMedia('(prefers-color-scheme: light)').matches

  if (localStorageTheme === 'light' || isBrowserDefaultLight) {
    defaultTheme = 'light'
  }

  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    localStorage.setItem('theme', theme)

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
