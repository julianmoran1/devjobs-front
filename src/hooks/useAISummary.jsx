import { useState } from "react"

export function useAISummary({id}) {

  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(false)
  const [ , setError] = useState(false)

 async function generateSummary() {
    setLoading(true)
    setError(null)
    setSummary('')

    try {
      const response = await fetch(`https://devjobs-back.vercel.app/ia/summary/${id}`)
      if (!response.ok) {
        throw new Error('Error fetching summary')
      }
      // const data = await response.json()
      const reader = response.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunkText = decoder.decode(value, { stream: true})
        setSummary(prev => prev + chunkText)
      }
    } catch {
      console.log('Error al generar resumen')
    }
    finally {
      setLoading(false)
    }
  }

  return {
    summary, loading, generateSummary
  }

}
