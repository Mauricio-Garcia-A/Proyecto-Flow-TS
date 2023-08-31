import { ItemDay } from '../ItemsForecastSection/ItemDay'
import './../ForecastSection.scss'

export const PlaceholderForecastSection = () => {
  return (
    <section className='container-forecast  placeholder'>
      <h1>
        Pronóstico extendido
      </h1>
      <div className='container-week-days'>
        {[1, 2, 3, 4, 5, 6].map((day) => {
          return (
            <div key={`container-placeholder-day-${day}`}>
              <ItemDay
                monthName={'Mes'}
                dayName={'Dia'}
                dayNumber={'N#'}
                tempMin={'---'}
                tempMax={'---'}
                icon={'na'}
                description={'cargando...'}
                dataHours={[]}
              />
            </div>
          )
        })}
      </div>
    </section>

  )
}
