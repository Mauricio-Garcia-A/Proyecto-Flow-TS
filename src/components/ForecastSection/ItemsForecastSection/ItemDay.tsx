import WindDirectionIcon from '../../Icons/WindDirectionIcon.tsx'
import ModalDaySelected from '../../ModalDaySelected/ModalDaySelected.tsx'
import { type Forecast } from '../../../types'

export const ItemDay = (
  { monthName, dayName, dayNumber, tempMin, tempMax, icon, description, dataHours }: Pick<Forecast, 'monthName' | 'dayName' | 'dayNumber' | 'description' | 'icon' | 'tempMax' | 'tempMin' | 'dataHours'>

) => {
  return (
    <article className="container-item-day">
      <header>
        <h1 className='text-month'>{monthName}</h1>
        <h2>{dayName} <span>{dayNumber}</span></h2>

      </header>
      <main>
        <section className='section-temperatures'>
          <p><b>Min:</b>{Math.round(tempMin)}°C</p>
          <p><b>Max:</b>{Math.round(tempMax)}°C</p>
        </section>
        <section className='section-information'>
          <img src={`/IconsWeather/${icon}.png`} alt='icon-weather' />
          <h3>{description}</h3>
        </section>
      </main>
      <footer>
        <ModalDaySelected
          day={dayName}
          number={dayNumber}
          month={monthName}
        >
          <article>
            {dataHours.map((dataHour, i: number) => {
              return <div key={`hora-${i}`} style={{ display: 'flex', gap: '10px' }}>
                <p >{dataHour.hour} hs</p>
                <p>{dataHour.temperature} °C</p>
                <img src={`/IconsWeather/${dataHour.icon}.png`} alt='icon-weather' style={{ width: '30px' }} />
                <WindDirectionIcon fill='white' width='15px' style={{ transform: `rotate(${dataHour.windDirection}deg)` }} />
                <p>{dataHour.windSpeed} m/s </p>
              </div>
            })}
          </article>
        </ModalDaySelected>
      </footer>
    </article>
  )
}
