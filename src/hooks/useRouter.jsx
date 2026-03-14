import { useLocation, useNavigate } from "react-router"
import { useCallback } from "react"

function useRouter() {
  const navigate = useNavigate()
  const location = useLocation()


  const navigateTo = useCallback((path) => {
    navigate(path)
  }, [navigate])

  return { currentPath: location.pathname, navigateTo }
}

export default useRouter