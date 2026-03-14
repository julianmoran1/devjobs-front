import { useState, useRef, useEffect } from "react"

const useSearchForm = ({ technologyId, locationId, experienceId, onSearch, onTextFilter, searchId }) => {
  const [searchText, setSearchText] = useState('')
  const timeoutRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    if (event.target.name === searchId) {
      return
    }

    const filters = {
      technology: formData.get(technologyId),
      location: formData.get(locationId),
      experience: formData.get(experienceId),
    }
    onSearch(filters)
  }

  const handleTextChange = (event) => {
    const text = event.target.value
    setSearchText(text)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      onTextFilter(text)
    }, 500);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return {
    searchText,
    handleSubmit,
    handleTextChange
  }
}

export default useSearchForm