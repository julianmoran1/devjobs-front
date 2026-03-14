import JobListings from '../components/JobListings'
import Pagination from '../components/Pagination'
import SearchFormSection from '../components/SearchFormSection'
import useFilters from '../hooks/useFilters'

function SearchPage() {

  const { jobs, loading, handleSearch, handleTextFilter, currentPage, totalPages, handlePageChange, filters, clearFilters, total, textToFilter } = useFilters()

  return (
    <main>
      <title>{`Resultados ${total}`}</title>
      <SearchFormSection
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
        filters={filters}
        onClearFilters={clearFilters}
        initialText={textToFilter}
      />
      <section>
        <h2>Resultados de búsqueda</h2>
        {loading ? <p>Cargando empleos</p> : <JobListings jobs={jobs} />}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}

export default SearchPage
