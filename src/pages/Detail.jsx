import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { JobSection } from './JobSection'
import { DetailPageBreadCrumb } from './DetailPageBreadCrumb'
import { DetailPageHeader } from './DetailPageHeader'

const JobDetail = () => {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(true)

  useEffect(() => {
    if (!id) return

    fetch(`https://devjobs-back.vercel.app/jobs/${id}`)
      .then((response) => response.json())
      .then((data) => setJob(data))
      .catch((error) => {
        console.error('Error cargando el job', error)
      })
  }, [id])

  if (!job) {
    return <p>Cargando oferta...</p>
  }

  return (
    <>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'left' }}>
        <DetailPageBreadCrumb job={job} />
        <DetailPageHeader job={job} />

        <JobSection title="Descripción del puesto" content={job.content.description} />
        <JobSection title="Responsabilidades" content={job.content.responsibilities} />
        <JobSection title="Requisitios" content={job.content.requirements} />
        <JobSection title="Acerca de la empresa" content={job.content.about} />
      </div>
    </>
  )
}

export default JobDetail
