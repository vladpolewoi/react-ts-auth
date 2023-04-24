import { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { ThemeContext } from '@/contexts/ThemeContext'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className={`${styles.ThemeToggle} ${className}`} onClick={toggleTheme}>
      {theme === 'dark' ? (
        <MdLightMode className={styles.ThemeToggle__icon} />
      ) : (
        <MdDarkMode className={styles.ThemeToggle__icon} />
      )}
    </button>
  )
}
