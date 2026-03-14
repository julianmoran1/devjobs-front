import { useAuthStore } from "../store/authStore"
import { Navigate } from "react-router"

const ProtectedRoute = ({children, redirectTo = '/login'}) => {

  const {isLoggedIn} = useAuthStore()

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} />
  }

  return children
}

export default ProtectedRoute
