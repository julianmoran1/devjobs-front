import { useState } from "react"
import Link from "./Link"
import styles from './JobCard.module.css'
import FavoriteButton from "./FavoriteButton"
import { useAuthStore } from "../store/authStore"

const JobCard = ({ job: { titulo, id, empresa, ubicacion, descripcion } }) => {

  const [isApplied, setIsApplied] = useState(false)

  const { isLoggedIn } = useAuthStore()

  const buttonClasses = isApplied ? 'button-apply-job is-applied' : 'button-apply-job'
  const buttonText = isApplied ? 'Aplicado' : 'Aplicar'
  const handleApplyClick = () => {
    setIsApplied(true)
  }

  return (
    <article className='job-listing-card'>
      <div>
        <Link to={`/jobs/${id}`}>
          <h3 className={styles.title} >{titulo}</h3>
        </Link>
        <small>{empresa} | {ubicacion}</small>
        <p>{descripcion}</p>
      </div>
      <div className={styles.actions}>
        <Link to={`/jobs/${id}`}>
          <p className={styles.title} >ver detalles</p>
        </Link>
      <button disabled={!isLoggedIn} onClick={handleApplyClick} className={buttonClasses}>{buttonText}</button>
      <FavoriteButton id={id} />
      </div>
    </article>
  )
}

export default JobCard
