import { TemperatureExtremes } from '../../WeatherSection/ItemsWeather/TemperatureExtremes'
import { ChartLineWeatherHours } from '../../ChartLineWeatherHours/ChartLineWeatherHours'
import { BuildListTemperaturesHours } from '../../../helper/BuildListTemperaturesHours'
import { type Forecast } from '../../../types'
import { HeaderChartWeather } from './HeaderChartWeather'
import './ContentModalGraphicWeather.scss'

interface Props {
  tempMin: Forecast['tempMin'] | string
  tempMax: Forecast['tempMax'] | string
  dataHours: Forecast['dataHours']
}
export const ContentModalGraphicWeather: React.FC<Props> = ({ tempMax, tempMin, dataHours }) => {
  const { temperatureList, dataWeatherHours } = BuildListTemperaturesHours({ dataHours })

  return (
    <section className='contanter-cotent-modal-weather'>
      <article >
        <TemperatureExtremes
          temperature='max'
          value={(typeof tempMax === 'number') ? Math.round(tempMax) : tempMax}
        />
        <TemperatureExtremes
          temperature='min'
          value={(typeof tempMin === 'number') ? Math.round(tempMin) : tempMin}
        />
      </article>
      <article>
        <HeaderChartWeather
          dataWeatherHours = {dataWeatherHours}
        />
        <ChartLineWeatherHours
          tempMax={(typeof tempMax === 'number') ? Math.round(tempMax) : tempMax}
          tempMin={(typeof tempMin === 'number') ? Math.round(tempMin) : tempMin}
          temperatures={temperatureList}
        />
      </article>
    </section>
  )
}
