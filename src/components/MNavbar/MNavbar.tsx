import MLink from '@/components/MLink/MLink'
import { NavLink } from 'react-router-dom'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import styles from './MNavbar.module.scss'

export default function MNavbar() {
  return (
    <nav className="glass fixed left-0 top-0 z-10 flex w-full items-center border-none bg-base-400 px-6 py-1">
      {/* <img src="/src/assets/logo_2.png" alt="logo" className="h-16 w-16" /> */}
      <Logo className={styles.logo} />
      <ul className="flex w-full justify-center">
        <li>
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
        </li>
        <li className="mx-6">
          <NavLink className="navLink" to="/sign-up">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  )
}
