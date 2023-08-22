import '.././WeatherSection.scss'
import { CompassBackground } from '.././ItemsWeather/CompassBackground'
import { SunEvent } from '.././ItemsWeather/SunEvent'
import { TemperatureInfo } from '.././ItemsWeather/TemperatureInfo'
import { StateWeather } from '.././ItemsWeather/StateWeather'
import { UpdateTime } from '.././ItemsWeather/UpdateTime'
import { WindInfo } from '.././ItemsWeather/WindInfo'
import { ClimaticFactor } from '.././ItemsWeather/ClimaticFactor'
import { TemperatureExtremes } from '.././ItemsWeather/TemperatureExtremes'
import { HeaderWeather } from '.././ItemsWeather/HeaderWeather'

export const PlaceholderWeatherSection = () => {
  return (
    <section className='container-weather placeholder'>
      <header>
        <HeaderWeather
          nameCity={'Cargando Ciudad'}
          currentDate={'-------'}
        />
      </header>
      <main className='container-info-weather'>
        <CompassBackground windDeg={0} />
        <article >
          <header>
          <svg height="440" width="440" className='progress'>
            <circle className='progress-circle' cx="220" cy="220" r="195" pathLength='334' fill="transparent" />
            <circle className='progress-circle-bar' cx="220" cy="220" r="195" pathLength='334' fill="transparent" strokeDasharray='0 70' />
          </svg>
            <SunEvent hourMinute={'--:--'} sunEvent='sunRise' />
            <TemperatureInfo
              temperature={'----'}
              thermalSensation={'---'}
            />
            <SunEvent hourMinute={'--:--'} sunEvent='sunSet' />
          </header>

          <main>
            <div className='container-data-weather'>
              <TemperatureExtremes
                temperature='min'
                value={'---'}
              />
              <div className='separator2' />
              <ClimaticFactor
                factor='pressure'
                value={'---'}
                position='left'
              />
              <div className='separator2' />
              <ClimaticFactor
                factor='humidity'
                value={'---'}
                position='left'
              />
            </div>

            <StateWeather
              weatherIcon={'na'}
              weatherDescription={'Cargando...'}
            />

            <div className='container-data-weather'>
              <TemperatureExtremes
                temperature='max'
                value={'---'}
              />
              <div className='separator2' />
              <ClimaticFactor
                factor='visibility'
                value={'---'}
                position='right'
              />
              <div className='separator2' />
              <ClimaticFactor
                factor='cloudPercentage'
                value={'---'}
                position='right'
              />
            </div>
          </main>
          <footer>
            <WindInfo
              windSpeed={'---'}
              windGust={'---'}
              windDeg={0}
              windDirectionAbbreviation={'---'}
              windDirection={'---'}
            />
            <UpdateTime
              dateHourMinute={'HH:MM'}
              dateWeekday={'DIA'}
              dateDayMoment={'...'}
            />
          </footer>
        </article>
      </main>
    </section>
  )
}