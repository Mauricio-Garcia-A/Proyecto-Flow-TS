import { useState } from 'react'
import { type ListOfCities } from '../../types'
import { SelectorCity } from '../../components/SelectorCity/SelectorCity'
import { useWeatherCity } from '../../hooks/useWeatherCity.js'
import './Home.scss'
import { WeatherSection } from '../../components/WeatherSection/WeatherSection'
import { ForecastSection } from '../../components/ForecastSection/ForecastSection'
import { PlaceholderWeatherSection } from '../../components/WeatherSection/PlaceholderWeatherSection/PlaceholderWeatherSection.js'
import { PlaceholderForecastSection } from '../../components/ForecastSection/PlaceholderForecastSection/PlaceholderForecastSection.js'

interface Props {
  cities: ListOfCities
}

export const Home: React.FC<Props> = ({ cities }) => {
  const [idCitySelected, setIdCitySelected] = useState(3837856)

  const { weatherCitySelected, extendedForecast, loadingWeather, loadingForecast, currentDateFormatted } = useWeatherCity({ idCity: idCitySelected })

  return (
    <section className='container-home'>
      <header>
        <SelectorCity cities={cities} setCity={setIdCitySelected} />
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
