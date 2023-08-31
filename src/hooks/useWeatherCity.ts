import { useEffect, useState } from 'react'
import { getWeatherCurrent, getExtendedForecast } from '../services/getWeather'
import { FormattedCurrentDate } from '../helper/FormattedCurrentDate'
import { type Coord, type WeatherCity, type ExtendedForecast } from '../types'

interface Props {
  lat: Coord['lat'] | undefined
  lon: Coord['lon'] | undefined
}

export function useWeatherCity ({ lat, lon }: Props) {
  const [weatherCitySelected, setWeatherCitySelected] = useState({ nameCity: ' ' })
  const [extendedForecast, setExtendedForecast] = useState([])
  const [currentDateFormatted, setCurrentDateFormatted] = useState('')
  const [loadingWeather, setLoadingWeather] = useState(true)
  const [loadingForecast, setLoadingForecast] = useState(true)

  useEffect(() => {
    setLoadingForecast(true)
    setLoadingWeather(true)

    const { currentDate } = FormattedCurrentDate()

    void getWeatherCurrent({ lat, lon })
      .then((dataWeather: WeatherCity | any) => {
        setWeatherCitySelected(dataWeather)
        setCurrentDateFormatted(currentDate)
        setLoadingWeather(false)
      })

    void getExtendedForecast({ lat, lon })
      .then((daysForecast: ExtendedForecast | any) => {
        setExtendedForecast(daysForecast)
        setLoadingForecast(false)
      })
  }, [lat])

  return { weatherCitySelected, extendedForecast, loadingWeather, loadingForecast, currentDateFormatted }
}
