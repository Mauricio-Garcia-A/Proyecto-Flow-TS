import { type ExtendedForecast } from '../../types'
import './ForecastSection.scss'

interface Props {
  extendedForecast: ExtendedForecast
}

export const ForecastSection: React.FC<Props> = ({ extendedForecast }) => {
  return (
    <section>
      <article className='container-forecast'>
        { extendedForecast.map((day, i) => {
          return (
            <div key={`container-day-${i}`}>
              <h3>{day.dayName} {day.dayNumber}</h3>
              <img src={`/IconsWeather/${day.icon}.png`} alt='icon-weather' />
              <p>{day.description}</p>
              <p><b>Min:</b>{day.tempMin}°C</p>
              <p><b>Max:</b>{day.tempMax}°C</p>
            </div>
          )
        })}
      </article>
    </section>

  )
}
