import JobCard from './JobCard'

const JobListings = ({ jobs }) => {
  return (
    <>
      <div className="jobs-listings">
        {jobs && jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}

        {jobs.length === 0 && (
          <p>No hay resultados para tu búsqueda</p>
        )}
      </div>
    </>

  )
}

export default JobListings
