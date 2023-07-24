import { useState } from 'react'
import { type ListOfCities } from '../types'
import { SelectorCity } from '../components/SelectorCity/SelectorCity'
import { useWeatherCity } from '../hooks/useWeatherCity'
interface Props {
  cities: ListOfCities
}

export const Home: React.FC<Props> = ({ cities }) => {
  const [idCitySelected, setIdCitySelected] = useState(3837856)

  const { weatherCitySelected, extendedForecast, loadingWeather, loadingForecast } = useWeatherCity({ idCity: idCitySelected })

  return (
    <section>
      <header>
        <SelectorCity cities={cities} setCity={setIdCitySelected} />
      </header>
      <main>
        {loadingWeather
          ? <h1>CARGANDO ...</h1>
          : <article>
              <h1>{weatherCitySelected.nameCity}</h1>
              <h2>{weatherCitySelected.weatherDescription}</h2>
              <p>{weatherCitySelected.temperature}</p>
            </article>
        }
      </main>
      <footer>
        {loadingForecast
          ? <h1>CARGANDO ...</h1>
          : <article>
              {extendedForecast.map((day, i) => {
                return (
                  <div key={`container-day-${i}`}>
                    <h3>{day.dayName}</h3>
                    <p>{day.tempMin}</p>
                    <p>{day.tempMax}</p>
                  </div>
                )
              })}
            </article>
        }
      </footer>
    </section>
  )
}
