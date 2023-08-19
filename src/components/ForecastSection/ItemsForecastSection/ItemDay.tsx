import ModalDaySelected from '../../ModalDaySelected/ModalDaySelected.tsx'
import { type Forecast } from '../../../types'
import { ContentModalGraphicWeather } from '../../ModalDaySelected/ItemsModal/ContentModalGraphicWeather.tsx'

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
          <ContentModalGraphicWeather
            tempMax={tempMax}
            tempMin={tempMin}
            dataHours={dataHours }
          />
        </ModalDaySelected>
      </footer>
    </article>
  )
}
