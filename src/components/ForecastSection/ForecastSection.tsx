import { type ExtendedForecast } from '../../types'
import './ForecastSection.scss'
import { ItemDay } from './ItemsForecastSection/ItemDay'

interface Props {
  extendedForecast: ExtendedForecast
}

export const ForecastSection: React.FC<Props> = ({ extendedForecast }) => {
  return (
    <section className='container-forecast'>
      <h1>
        Pronóstico extendido
      </h1>
      <div className='container-week-days'>
        {extendedForecast.map((day, i) => {
          return (
            <div key={`container-day-${i}`}>
              <ItemDay
                monthName={day.monthName}
                dayName={day.dayName}
                dayNumber={day.dayNumber}
                tempMin={day.tempMin}
                tempMax={day.tempMax}
                icon={day.icon}
                description={day.description}
                dataHours={day.dataHours}
              />
            </div>
          )
        })}
      </div>
    </section>

  )
}
