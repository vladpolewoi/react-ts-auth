import { useState, useRef, useEffect } from 'react'
import { MLink, MButton } from '@/components'
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import UserAvatar from '@/components/UserAvatar'
import { useAuth } from '@/contexts/AuthContext'
import { MdLogout } from 'react-icons/md'
import styles from './MNavbar.module.scss'

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/secret',
    name: 'Secret',
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
  },
  {
    path: '/login',
    name: 'Login',
  },
]

export default function MNavbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const dotRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(
    routes.findIndex((route) => route.path === location.pathname),
  )

  useEffect(() => {
    const index = routes.findIndex((route) => route.path === location.pathname)
    setIndex(index)

    if (dotRef.current) {
      dotRef.current.classList.remove(styles.animate)
      setTimeout(() => {
        dotRef?.current?.classList.add(styles.animate)
      }, 0)
    }
  }, [location.pathname])

  async function onLogOut() {
    const { error } = await logout()
    navigate('/')
    console.log('Log out: ', error)
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__left}>
        <div
          ref={dotRef}
          className={`${styles.dot} ${index && styles.animate}`}
          style={{ top: `${18 + index * 28}px` }}
        ></div>
        <ul className={styles.navigation__list}>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink to={route.path} className={styles.navigation__link}>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.navigation__right}>
        <ThemeToggle className="mr-2" />
        {user ? (
          <>
            <UserAvatar user={user} />
            <button
              onClick={onLogOut}
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-primary-300"
            >
              <MdLogout className="h-6 w-6 fill-secondary" />
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={`${styles.navigation__link} ml-4`}>
              Login
            </NavLink>
            <div className="mx-4 h-5 w-[3px] rounded-sm bg-neutral"></div>
            <NavLink to="/sign-up" className={styles.navigation__link}>
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  )
}
