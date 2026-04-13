import { useAISummary } from '../hooks/useAISummary'
import styles from './Detail.module.css'

export function DetailSummarizeButton({ id }) {

  const { loading, summary, generateSummary }  = useAISummary({ id })

  return (
    <>
      <button className={styles.applyButton} onClick={generateSummary} disabled={loading || summary}>
        {loading ? 'Generando resumen' : 'Resumir con IA'}
      </button>
      {summary && (
        <>
          <h2>Resumen de IA</h2>
          <p>{summary}</p>
          <br />
        </>
      )
      }
    </>
  )
}
