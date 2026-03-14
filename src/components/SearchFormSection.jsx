import { useId, useRef } from 'react'
import useSearchForm from '../hooks/useSearchForm'

const SearchFormSection = ({ onSearch, onTextFilter, filters, onClearFilters, initialText }) => {
  const searchId = useId()
  const technologyId = useId()
  const locationId = useId()
  const experienceId = useId()

  const inputRef = useRef(null)

  const { handleSubmit, handleTextChange } = useSearchForm({ onSearch, onTextFilter, technologyId, experienceId, locationId, searchId })

  const handleClearFilters = (event) => {
    event.preventDefault()
    onClearFilters()
    // Reset the form values visually
    const form = event.target.closest('form')
    if (form) {
      form.reset()
    }
  }

  const handleClearInput = (event) => {
    event.preventDefault()
    inputRef.current.value = ''
    onTextFilter('')
  }

  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form id="empleos-search-form" role="search" onChange={handleSubmit}>
        <div className="search-bar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          {/* <button type='submit' style={{ position: 'absolute', right: '4px'}}>Buscar</button> */}

          <input ref={inputRef} name={searchId} id="empleos-search-input" type="text" onChange={handleTextChange}
            placeholder="Buscar trabajos, empresas o habilidades" defaultValue={initialText} />
          <button onClick={handleClearInput}>X</button>
        </div>

        <div className="search-filters">
          <select name={technologyId} id="filter-technology" defaultValue={filters.technology}>
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
            </optgroup>
            <option value="java">Java</option>
            <hr />
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <hr />
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
          </select>

          <select name={locationId} id="filter-location" defaultValue={filters.location}>
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          <select name={experienceId} id="filter-experience-level" defaultValue={filters.experience}>
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>

          {(filters.technology || filters.experience || filters.location) && <button onClick={handleClearFilters}>Limpiar filtros</button>}
        </div>
      </form>

      <span id="filter-selected-value"></span>
    </section>
  )
}

export default SearchFormSection
