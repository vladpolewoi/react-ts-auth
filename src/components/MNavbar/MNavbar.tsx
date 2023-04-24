import { useState, useRef, useEffect } from 'react'
import { MLink, MButton } from '@/components'
import { NavLink, useLocation, Link } from 'react-router-dom'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import UserAvatar from '@/components/UserAvatar'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { useAuth } from '@/contexts/AuthContext'
import './MNavbar.scss'

const routes = [
  {
    path: '/',
    name: 'Home',
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
  const location = useLocation()
  const dotRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(
    routes.findIndex((route) => route.path === location.pathname),
  )

  useEffect(() => {
    const index = routes.findIndex((route) => route.path === location.pathname)
    setIndex(index)

    if (dotRef.current) {
      dotRef.current.classList.remove('animate')
      setTimeout(() => {
        dotRef?.current?.classList.add('animate')
      }, 0)
    }
  }, [location.pathname])

  async function onLogOut() {
    const { error } = await logout()
    console.log('Log out: ', error)
  }

  return (
    <nav className="navigation">
      {/* <img src="/src/assets/logo_2.png" alt="logo" className="h-16 w-16" /> */}
      {/* <Link to="/">
        <Logo className="logo" />
      </Link> */}

      <div
        ref={dotRef}
        className={`dot ${index && 'animate'}`}
        style={{ top: `${18 + index * 28}px` }}
      ></div>
      <ul className="list">
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink to={route.path} className="navLink">
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ThemeToggle />
      <MButton onClick={onLogOut} text="Log out" />
      {user ? <p className="text-success">IN</p> : <p className="text-danger">OUT</p>}
      {user && <UserAvatar user={user}/>}
    </nav>
  )
}
