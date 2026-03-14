import styles from './Detail.module.css'
import Link from '../components/Link'

export function DetailPageBreadCrumb ({ job }) {
  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        <Link 
          href="/search"
          className={styles.breadcrumbButton}
        >
          Empleos
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{job.titulo}</span>
      </nav>
    </div>
  )
}