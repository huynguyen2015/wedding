import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useDefaultFilter(defaultParams?) {
  const [searchParams] = useSearchParams()
  const defaultFilter = {
    page_index: 1,
    page_size: 25,
    ...(defaultParams || {})
  } as any

  useEffect(() => {
    searchParams.forEach((value, key) => {
      switch (key) {
        case 'page_index': {
          defaultFilter[key] = parseInt(value) || defaultFilter.page_index
          break
        }
        case 'page_size': {
          defaultFilter[key] = parseInt(value) || defaultFilter.page_size
          break
        }
        default: {
          defaultFilter[key] = value
        }
      }
    })
  }, [])

  return defaultFilter
}
