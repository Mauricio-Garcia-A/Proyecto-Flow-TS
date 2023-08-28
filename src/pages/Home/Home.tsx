import { useContext } from 'react'
import { useWeatherCity } from '../../hooks/useWeatherCity.js'
import './Home.scss'
import { WeatherSection } from '../../components/WeatherSection/WeatherSection'
import { ForecastSection } from '../../components/ForecastSection/ForecastSection'
import { PlaceholderWeatherSection } from '../../components/WeatherSection/PlaceholderWeatherSection/PlaceholderWeatherSection.js'
import { PlaceholderForecastSection } from '../../components/ForecastSection/PlaceholderForecastSection/PlaceholderForecastSection.js'
import { useSearchCityById } from './../../hooks/useSearchCityById.js'
import { ContextListCities } from '../../context/ContextListCities.js'
import { NavBar } from '../../components/NavBar/NavBar.js'

export const Home = () => {
  const contextValues = useContext(ContextListCities)

  const citySelected = useSearchCityById({ id: contextValues?.idCitySelected })

  const { weatherCitySelected, extendedForecast, loadingWeather, loadingForecast, currentDateFormatted } = useWeatherCity({ lat: citySelected.coord.lat, lon: citySelected.coord.lon })

  return (
    <section className='container-home'>

      <header className='header-home' style = {{ display: 'flex' }}>
        <NavBar />
      </header>
      <div className='container-content-main-home'>
        <main>
          {loadingWeather
            ? <PlaceholderWeatherSection />
            : <WeatherSection weatherCitySelected = {weatherCitySelected} currentDate={currentDateFormatted} />
          }
        </main>
        <footer>
          {loadingForecast
            ? <PlaceholderForecastSection />
            : <ForecastSection extendedForecast={extendedForecast} />
          }
        </footer>
      </div>
    </section>
  )
}
