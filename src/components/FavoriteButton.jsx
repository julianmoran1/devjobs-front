import { useAuthStore } from "../store/authStore"
import { useFavoritesStore } from "../store/favoritesStore"

const FavoriteButton = ({id}) => {
  const {isFavorite, toggleFavorite} = useFavoritesStore()
  const {isLoggedIn} = useAuthStore()

  return (
   <button disabled={!isLoggedIn} onClick={() => toggleFavorite(id)}>{isFavorite(id) ? '❤️' : '🤍'}</button> 
  )
}

export default FavoriteButton
