import React from 'react'
import Link from './Link'
import { NavLink } from 'react-router'
import LoginButton from './LoginButton'
import { useAuthStore } from '../store/authStore'
import { useFavoritesStore } from '../store/favoritesStore'

const Header = () => {
  const { isLoggedIn } = useAuthStore()
  const { countFavorites } = useFavoritesStore()

  return (
    <header>
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <h1>
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          DevJobs
        </h1>
      </Link>

      <nav>
        {
          /*
          <a href="">
            Inicio
          </a>
          */
        }
        <NavLink to="/" className={({ isActive }) => (isActive ? 'header-nav-link navLinkActive' : 'header-nav-link')}>Home</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'header-nav-link navLinkActive' : 'header-nav-link')}>Contacto</NavLink>
        <NavLink to="/search" className={({ isActive }) => (isActive ? 'header-nav-link navLinkActive' : 'header-nav-link')}>Empleos</NavLink>
        {isLoggedIn && (
          <NavLink to="/perfil" className={({ isActive }) => (isActive ? 'header-nav-link navLinkActive' : 'header-nav-link')}>Perfil - {countFavorites()} ❤️</NavLink>
        )}
      </nav>

      {/* {isLoggedIn
        ? <button onClick={logout}>Cerrar sesion</button>
        : <button onClick={login}>Iniciar sesion</button>
      } */}
      <LoginButton />

      {/*     <div>
      <devjobs-avatar service="google" username="google.com" size="32">
      </devjobs-avatar>

      <devjobs-avatar service="google" username="netflix.com" size="32">
      </devjobs-avatar>

      <devjobs-avatar service="google" username="vercel.com" size="32">
      </devjobs-avatar>
    </div> */}
    </header>
  )
}

export default Header
