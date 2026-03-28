import { useEffect, useState } from "react"
import useRouter from "../hooks/useRouter"
import { useSearchParams } from "react-router"


const useFilters = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const [filters, setFilters] = useState(() => {
    return {
      technology: searchParams.get('technology') || '',
      location: searchParams.get('type') || '',
      experience: searchParams.get('experience') || '',
    }
  })


  const [textToFilter, setTextToFilter] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('text') || ''
  })

  const [currentPage, setcurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    const page = params.get('page')
    return page ? Number(page) : 1
  })

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)

  const { navigateTo } = useRouter()

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true)

        const params = new URLSearchParams()
        if (textToFilter) params.append('text', textToFilter)
        if (filters.technology) params.append('technology', filters.technology)
        if (filters.location) params.append('type', filters.location)
        if (filters.experience) params.append('experience', filters.experience)

        const offset = (currentPage - 1) * RESULTS_PER_PAGE
        params.append('limit', RESULTS_PER_PAGE)
        params.append('offset', offset)

        const queryParams = params.toString()

        const response = await fetch(`https://devjobs-back.vercel.app/jobs?${queryParams}`)
        const json = await response.json()
        setJobs(json.data)
        setTotal(json.total)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [filters, textToFilter, currentPage])

  useEffect(() => {
    setSearchParams((params) => {
      if (textToFilter) params.set('text', textToFilter)
      if (filters.technology) params.set('technology', filters.technology)
      if (filters.location) params.set('type', filters.location)
      if (filters.experience) params.set('experience', filters.experience)
      if (currentPage > 1) params.set('page', currentPage)

      return params
    })
  }, [filters, currentPage, textToFilter, navigateTo, setSearchParams])

  const RESULTS_PER_PAGE = 5

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE)

  const handlePageChange = (page) => {
    setcurrentPage(page)
  }

  const handleSearch = (filters) => {
    setFilters(filters)
    setcurrentPage(1)
  }

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter)
    setcurrentPage(1)
  }

  const clearFilters = () => {
    setFilters({
      technology: '',
      location: '',
      experience: ''
    })
    setcurrentPage(1)
  }

  return {
    filters,
    jobs,
    total,
    totalPages,
    loading,
    handlePageChange,
    handleSearch,
    handleTextFilter,
    currentPage,
    clearFilters,
    textToFilter
  }

}

export default useFilters
