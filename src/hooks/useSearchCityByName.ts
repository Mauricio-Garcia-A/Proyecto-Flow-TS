import { useEffect, useState } from 'react'
import { getSearchCity } from '../services/getWeather.js'

export function useSearchCityByName ({ queryNameCity}) {
  const [listCitiesSearched, setListCitiesSearched] = useState([])
  const [loadingSearch, setLoadingSearch] = useState(false)

  useEffect(() => {
    setLoadingSearch(true)

    void getSearchCity({ nameCity: queryNameCity })
      .then( dataSearchCity => {
        setListCitiesSearched(dataSearchCity)
        setLoadingSearch(false)
      })
  }, [queryNameCity])

  return { listCitiesSearched, loadingSearch }
}
