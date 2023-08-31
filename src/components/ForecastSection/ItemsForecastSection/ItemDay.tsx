import ModalDaySelected from '../../ModalDaySelected/ModalDaySelected.tsx'
import { type Forecast } from '../../../types'
import { ContentModalGraphicWeather } from '../../ModalDaySelected/ItemsModal/ContentModalGraphicWeather.tsx'

interface Props {
  monthName: Forecast['monthName']
  dayName: Forecast['dayName']
  dayNumber: Forecast['dayNumber']
  tempMin: Forecast['tempMin'] | string
  tempMax: Forecast['tempMax'] | string
  icon: Forecast['icon']
  description: Forecast['description']
  dataHours: Forecast['dataHours']
}

export const ItemDay: React.FC<Props> = ({ monthName, dayName, dayNumber, tempMin, tempMax, icon, description, dataHours }) => {
  return (
    <article className="container-item-day">
      <header>
        <h1 className='text-month'>{monthName}</h1>
        <h2>{dayName} <span>{dayNumber}</span></h2>

      </header>
      <main>
        <section className='section-temperatures'>
          <p>
            <b>Min:</b>
            {(typeof tempMin === 'number') ? Math.round(tempMin) : tempMin}°C
            </p>
          <p><b>Max:</b>{(typeof tempMax === 'number') ? Math.round(tempMax) : tempMax}°C</p>
        </section>
        <section className='section-information'>
          <img src={`IconsWeather/${icon}.png`} alt='icon-weather' />
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
