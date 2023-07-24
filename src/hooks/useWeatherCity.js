import { useEffect, useState } from 'react'
import { getWeatherCurrent, getExtendedForecast } from '../services/getWeather.js'
import { useSearchCityById } from './useSearchCityById.js'

export function useWeatherCity ({ idCity }) {
  const [weatherCitySelected, setWeatherCitySelected] = useState(
    {
      cloudPercentage: 100,
      dateDayMoment: 'AM',
      dateHourMinute: '03:31',
      dateWeekday: 'SÁB',
      humidity: 93,
      pressure: 1008,
      sunRise: 1690023542,
      sunSet: 1690059237,
      temperature: 15.74,
      temperatureMax: 16.72,
      temperatureMin: 14.41,
      thermalSensation: 15.8,
      visibility: 10000,
      weatherDescription: 'nubes',
      weatherIcon: '04n',
      windDeg: 230,
      windGust: 0,
      windSpeed: 1.34
    }
  )
  const [extendedForecast, setExtendedForecast] = useState(
    [{
      day: '24/7/2023',
      monthName: 'julio',
      dayName: 'lun',
      dayNumber: '24',
      description: 'nevada ligera',
      icon: '13d',
      tempMax: 1.44,
      tempMin: 0.98,
      dataHours: [
        {
          hour: '03:00',
          day: '24/7/2023',
          monthName: 'julio',
          dayName: 'lun',
          dayNumber: '24',
          icon: '13n',
          description: 'nevada ligera',
          temperature: 1.44,
          temperatureMin: -0.5,
          temperatureMax: 1.44,
          thermalSensation: -0.32,
          atmosphericPressure: 1027,
          humidity: 71,
          visibility: 3771,
          clouds: 100,
          windSpeed: 1.64,
          windDirection: 62,
          windGust: 2.82
        }
      ]
    }]
  )

  const [loadingWeather, setLoadingWeather] = useState(true)
  const [loadingForecast, setLoadingForecast] = useState(true)

  useEffect(() => {
    setLoadingForecast(true)
    setLoadingWeather(true)

    const citySelected = useSearchCityById({ id: idCity })
    void getWeatherCurrent({ lat: citySelected.coord.lat, lon: citySelected.coord.lon })
      .then(dataWeather => {
        setWeatherCitySelected(dataWeather)
        setLoadingWeather(false)
      })

    void getExtendedForecast({ lat: citySelected.coord.lat, lon: citySelected.coord.lon })
      .then(daysForecast => {
        setExtendedForecast(daysForecast)
        setLoadingForecast(false)
      })

    // getSearchCity({nameCity:'merlo'})
  }, [idCity])

  return { weatherCitySelected, extendedForecast, loadingWeather, loadingForecast }
}
