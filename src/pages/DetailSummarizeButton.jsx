import { useState } from 'react'
import styles from './Detail.module.css'

export function DetailSummarizeButton({ id }) {

  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function generateSummary() {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://devjobs-back.vercel.app/ia/summary/${id}`)
      if (!response.ok) {
        throw new Error('Error fetching summary')
      }
      const data = await response.json()
      setSummary(data.summary)
    } catch {
      console.log('Error al generar resumen')
    }
    finally {
      setLoading(false)
    }
  }

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