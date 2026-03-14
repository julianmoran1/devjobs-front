import { useAuthStore } from '../store/authStore'

const LoginButton = () => {
  const { isLoggedIn, login, logout, clearFavorites } = useAuthStore()

  const handleLogout = () => {
    logout()
    clearFavorites()
  }

  return (
    isLoggedIn
      ? <button onClick={handleLogout}>Cerrar sesion</button>
      : <button onClick={login}>Iniciar sesion</button>
  )
}


export default LoginButton
