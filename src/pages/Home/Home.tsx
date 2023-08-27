import { useState, useContext, useEffect } from 'react'
import { SelectorCity } from '../../components/SelectorCity/SelectorCity'
import { useWeatherCity } from '../../hooks/useWeatherCity.js'
import './Home.scss'
import { WeatherSection } from '../../components/WeatherSection/WeatherSection'
import { ForecastSection } from '../../components/ForecastSection/ForecastSection'
import { PlaceholderWeatherSection } from '../../components/WeatherSection/PlaceholderWeatherSection/PlaceholderWeatherSection.js'
import { PlaceholderForecastSection } from '../../components/ForecastSection/PlaceholderForecastSection/PlaceholderForecastSection.js'
import { GeolocatedCity } from '../../components/GeolocatedCity/GeolocatedCity.js'
import { useSearchCityById } from './../../hooks/useSearchCityById.js'
import { ContextListCities } from '../../context/ContextListCities.js'
import { SearchCity } from '../../components/SearchCity/SearchCity.js'

export const Home = () => {
  const contextValues = useContext(ContextListCities)

  const citySelected = useSearchCityById({ id: contextValues?.idCitySelected })

  const { weatherCitySelected, extendedForecast, loadingWeather, loadingForecast, currentDateFormatted } = useWeatherCity({ lat: citySelected.coord.lat, lon: citySelected.coord.lon })

  return (
    <section className='container-home'>

      <header className='header-home' >
        <GeolocatedCity />
        <SelectorCity />
        <SearchCity />
      </header>
      <main>
        {loadingWeather
          ? <PlaceholderWeatherSection />
          : <WeatherSection weatherCitySelected={weatherCitySelected} currentDate={currentDateFormatted} />
        }
      </main>
      <footer>
        {loadingForecast
          ? <PlaceholderForecastSection />
          : <ForecastSection extendedForecast={extendedForecast} />
        }
      </footer>

    </section>
  )
}
