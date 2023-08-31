import { useEffect, useState } from 'react'
import { getSearchCity } from '../services/getWeather.js'

export function useSearchCityByName ({ queryNameCity }: { queryNameCity: string | undefined }) {
  const [listCitiesSearched, setListCitiesSearched] = useState(
    [{
      id: 0,
      name: ' ',
      state: ' ',
      country: ' ',
      coord: {
        lon: 0,
        lat: 0
      }
    }]
  )
  const [loadingSearch, setLoadingSearch] = useState(false)

  useEffect(() => {
    setLoadingSearch(true)

    void getSearchCity({ nameCity: (typeof queryNameCity === 'string') ? queryNameCity : ' ' })
      .then(dataSearchCity => {
        setListCitiesSearched(dataSearchCity)
        setLoadingSearch(false)
      })
  }, [queryNameCity])

  return { listCitiesSearched, loadingSearch }
}
