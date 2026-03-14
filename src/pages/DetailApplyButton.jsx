import styles from './Detail.module.css'
import { useAuthStore } from '../store/authStore'

export function DetailApplyButton() {
  const { isLoggedIn } = useAuthStore()

  return (
    <button className={styles.applyButton} disabled={!isLoggedIn}>
      {isLoggedIn ? 'Aplicar' : 'Inicia sesion para aplicar'}
    </button>
  )
}