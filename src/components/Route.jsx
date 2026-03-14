import useRouter from "../hooks/useRouter"

const Route = ({ component: Component, path }) => {
  const { currentPath } = useRouter()

  if (currentPath !== path) return null

  return <Component />
}

export default Route
