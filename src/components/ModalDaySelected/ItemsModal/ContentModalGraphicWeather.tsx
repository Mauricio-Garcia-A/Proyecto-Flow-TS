import { TemperatureExtremes } from '../../WeatherSection/ItemsWeather/TemperatureExtremes'
import { ChartLineWeatherHours } from '../../ChartLineWeatherHours/ChartLineWeatherHours'
import { BuildListTemperaturesHours } from '../../../helper/BuildListTemperaturesHours'
import { type Forecast } from '../../../types'
import { HeaderChartWeather } from './HeaderChartWeather'
import './ContentModalGraphicWeather.scss'

export const ContentModalGraphicWeather = ({ tempMax, tempMin, dataHours }: Pick<Forecast, 'tempMax' | 'tempMin' | 'dataHours'>) => {
  const { temperatureList, dataWeatherHours } = BuildListTemperaturesHours({ dataHours })

  return (
    <section className='contanter-cotent-modal-weather'>
      <article >
        <TemperatureExtremes
          temperature='max'
          value={Math.round(tempMax)}
        />
        <TemperatureExtremes
          temperature='min'
          value={Math.round(tempMin)}
        />
      </article>
      <article>
        <HeaderChartWeather
          dataWeatherHours = {dataWeatherHours}
        />
        <ChartLineWeatherHours
          tempMax={Math.round(tempMax)}
          tempMin={Math.round(tempMin)}
          temperatures={temperatureList}
        />
      </article>
    </section>
  )
}
