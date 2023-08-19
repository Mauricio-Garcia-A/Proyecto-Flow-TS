import { type DataHour } from '../../../types'
import WindDirectionIcon from '../../Icons/WindDirectionIcon'
import './ContentModalGraphicWeather.scss'

interface dataWeatherHour {
  active: boolean
  temperature: DataHour['temperature']
  description: DataHour['description']
  icon: DataHour['icon']
  windSpeed: DataHour['windSpeed']
  windDirection: DataHour['windDirection']
}

interface Props {
  dataWeatherHours: dataWeatherHour[]
}

export const HeaderChartWeather: React.FC<Props> = ({ dataWeatherHours }) => {
  return (
    <main className='container-header-chart-weather'>
      {
        dataWeatherHours.map((dataHour, i: number) => {
          const styleSelected = dataHour.active ? { opacity: '1' } : { opacity: '0.4' }
          return <div key={`item-hour-${i}`} style={styleSelected}>
            <WindDirectionIcon fill='white' width='13px' style={{ transform: `rotate(${dataHour.windDirection}deg)` }} />
            <p>{dataHour.windSpeed} m/s </p>
            <abbr title={dataHour.description} >
              <img src={`/IconsWeather/${dataHour.icon}.png`} alt='icon-weather' style={{ width: '40px' }} />
            </abbr>
            <p>{dataHour.temperature} °C</p>

          </div>
        })
      }
    </main>
  )
}
