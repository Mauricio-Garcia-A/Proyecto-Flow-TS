import { useState } from 'react'
import { type ListOfCities } from '../../types'
import { SelectorCity } from '../../components/SelectorCity/SelectorCity'
import { useWeatherCity } from '../../hooks/useWeatherCity'
import './Home.scss'

interface Props {
  cities: ListOfCities
}

export const Home: React.FC<Props>=({ cities }) => {
  const [idCitySelected, setIdCitySelected] = useState(3837856)

  const { weatherCitySelected, extendedForecast, loadingWeather, loadingForecast } = useWeatherCity({ idCity: idCitySelected })

  return (
    <section className='container-home'>
      <header>
        <SelectorCity cities={cities} setCity={setIdCitySelected} />
      </header>
      <main>
        {loadingWeather
          ? <h1>CARGANDO ...</h1>
          : <article className='container-weather'>
              <h1>{weatherCitySelected.nameCity}</h1>
              <img src={`/IconsWeather/${weatherCitySelected.weatherIcon}.png`} alt='icon-weather'/>
              <h2>{weatherCitySelected.weatherDescription}</h2>
              <p><b>Temperatura:</b> {weatherCitySelected.temperature}°C</p>
              <p><b>Sensacion Termica:</b> {weatherCitySelected.thermalSensation}°C</p>
              <p><b>Precion atmosferica:</b> {weatherCitySelected.pressure} hPa</p>
              <p><b>Humedad:</b> {weatherCitySelected.humidity}%</p>
              <p><b>Velocidad del viento:</b> {weatherCitySelected.windSpeed} km/h</p>
              <p><b>Dirección del viento:</b> {weatherCitySelected.windDeg} (° grados meteorológicos)</p>
              <p><b>Ráfaga de viento.:</b> {weatherCitySelected.windGust} km/h</p>
              <p><b>Nubosidad:</b> {weatherCitySelected.cloudPercentage}% </p>
              <p><b>Amanecer:</b> {weatherCitySelected.sunRise} hs </p>
              <p><b>Atardecer:</b> {weatherCitySelected.sunSet} hs</p>
              <p><b>Hora Actualizacion:</b> {weatherCitySelected.dateWeekday} {weatherCitySelected.dateHourMinute} {weatherCitySelected.dateDayMoment}</p>
              <p><b>Visibilidad:</b> {weatherCitySelected.visibility} mtr </p>
            </article>
        }
      </main>
      <footer>
        {loadingForecast
          ? <h1>CARGANDO ...</h1>
          : <article className='container-forecast'>
              {extendedForecast.map((day, i) => {
                return (
                  <div key={`container-day-${i}`}>
                    <h3>{day.dayName} {day.dayNumber }</h3>
                    <img src={`/IconsWeather/${day.icon}.png`} alt='icon-weather'/>
                    <p>{day.description}</p>
                    <p><b>Min:</b>{day.tempMin}°C</p>
                    <p><b>Max:</b>{day.tempMax}°C</p>
                  </div>
                )
              })}
            </article>
        }
      </footer>
    </section>
  )
}
