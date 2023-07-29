import { type WeatherCity } from '../../types'
import './WeatherSection.scss'
import formatWindDirection from '../../helper/formatWindDirection'
import { SunBarProgress } from './ItemsWeather/SunBarProgress'
import { CompassBackground } from './ItemsWeather/CompassBackground'
import { SunEvent } from './ItemsWeather/SunEvent'
import { TemperatureInfo } from './ItemsWeather/TemperatureInfo'
import { StateWeather } from './ItemsWeather/StateWeather'
import { UpdateTime } from './ItemsWeather/UpdateTime'
import { WindInfo } from './ItemsWeather/WindInfo'
import { ClimaticFactor } from './ItemsWeather/ClimaticFactor'
import { TemperatureExtremes } from './ItemsWeather/TemperatureExtremes'
import { HeaderWeather } from './ItemsWeather/HeaderWeather'

interface Props {
  weatherCitySelected: WeatherCity
  currentDate: string
}

export const WeatherSection: React.FC<Props> = ({ weatherCitySelected, currentDate }) => {
  const { windDirectionAbbreviation, windDirection } = formatWindDirection(weatherCitySelected.windDeg)

  return (
    <section className='container-weather'>
      <header>
        <HeaderWeather
          nameCity={weatherCitySelected.nameCity}
          currentDate={currentDate}
        />
      </header>
      <main className='container-info-weather'>
        <CompassBackground windDeg={weatherCitySelected.windDeg} />
        <article >
          <header>
            <SunBarProgress
              sunRise={weatherCitySelected.sunRise}
              sunSet={weatherCitySelected.sunSet}
              dateHourMinute={weatherCitySelected.dateHourMinute}
              dateDayMoment={weatherCitySelected.dateDayMoment}
            />
            <SunEvent hourMinute={weatherCitySelected.sunRise} sunEvent='sunRise' />
            <TemperatureInfo
              temperature={weatherCitySelected.temperature}
              thermalSensation={weatherCitySelected.thermalSensation}
            />
            <SunEvent hourMinute={weatherCitySelected.sunSet} sunEvent='sunSet' />
          </header>

          <main>
            <div className='container-data-weather'>
              <TemperatureExtremes
                temperature='min'
                value={weatherCitySelected.temperatureMin}
              />
              <div className='separator2' />
              <ClimaticFactor
                factor='pressure'
                value={weatherCitySelected.pressure}
                position='left'
              />
              <div className='separator2' />
              <ClimaticFactor
                factor='humidity'
                value={weatherCitySelected.humidity}
                position='left'
              />
            </div>

            <StateWeather
              weatherIcon={weatherCitySelected.weatherIcon}
              weatherDescription={weatherCitySelected.weatherDescription}
            />

            <div className='container-data-weather'>
              <TemperatureExtremes
                temperature='max'
                value={weatherCitySelected.temperatureMax}
              />
              <div className='separator2' />
              <ClimaticFactor
                factor='visibility'
                value={weatherCitySelected.visibility}
                position='right'
              />
              <div className='separator2' />
              <ClimaticFactor
                factor='cloudPercentage'
                value={weatherCitySelected.cloudPercentage}
                position='right'
              />
            </div>
          </main>
          <footer>
            <WindInfo
              windSpeed={weatherCitySelected.windSpeed}
              windGust={weatherCitySelected.windGust}
              windDeg={weatherCitySelected.windDeg}
              windDirectionAbbreviation={windDirectionAbbreviation}
              windDirection={windDirection}
            />
            <UpdateTime
              dateHourMinute={weatherCitySelected.dateHourMinute}
              dateWeekday={weatherCitySelected.dateWeekday}
              dateDayMoment={weatherCitySelected.dateDayMoment}
            />
          </footer>
        </article>
      </main>
    </section>
  )
}
