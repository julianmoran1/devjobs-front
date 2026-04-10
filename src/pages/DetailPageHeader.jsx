import { DetailApplyButton } from './DetailApplyButton'
import styles from './Detail.module.css'
import FavoriteButton from '../components/FavoriteButton'
import { DetailSummarizeButton } from './DetailSummarizeButton'

export function DetailPageHeader({ job: {id, titulo, empresa, ubicacion} }) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {titulo}
        </h1>
        <p className={styles.meta}>
          {empresa} · {ubicacion}
        </p>
      </header>

      <DetailApplyButton />
      <FavoriteButton id={id} />
      <DetailSummarizeButton id={id} />

      {/* <DetailFavoriteButton jobId={job.id} /> */}
    </>
  )
}