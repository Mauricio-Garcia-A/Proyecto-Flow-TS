import { type Forecast } from '../types'

export const BuildListTemperaturesHours = ({ dataHours }: Pick<Forecast, 'dataHours'>) => {
  const temperatureList = Array(8)
  const dataWeatherHours = Array(8).fill({
    active: false,
    temperature: '----',
    description: '',
    icon: 'na',
    windSpeed: '----',
    windDirection: 0
  })

  dataHours.forEach((dataHour) => {
    switch (dataHour.hour) {
      case '24:00':
        temperatureList[0] = dataHour.temperature
        dataWeatherHours[0] = {
          active: true,
          temperature: dataHour.temperature,
          description: dataHour.description,
          icon: dataHour.icon,
          windSpeed: dataHour.windSpeed,
          windDirection: dataHour.windDirection
        }
        break
      case '03:00':
        temperatureList[1] = dataHour.temperature
        dataWeatherHours[1] = {
          active: true,
          temperature: dataHour.temperature,
          description: dataHour.description,
          icon: dataHour.icon,
          windSpeed: dataHour.windSpeed,
          windDirection: dataHour.windDirection
        }
        break
      case '06:00':
        temperatureList[2] = dataHour.temperature
        dataWeatherHours[2] = {
          active: true,
          temperature: dataHour.temperature,
          description: dataHour.description,
          icon: dataHour.icon,
          windSpeed: dataHour.windSpeed,
          windDirection: dataHour.windDirection
        }
        break
      case '09:00':
        temperatureList[3] = dataHour.temperature
        dataWeatherHours[3] = {
          active: true,
          temperature: dataHour.temperature,
          description: dataHour.description,
          icon: dataHour.icon,
          windSpeed: dataHour.windSpeed,
          windDirection: dataHour.windDirection
        }
        break
      case '12:00':
        temperatureList[4] = dataHour.temperature
        dataWeatherHours[4] = {
          active: true,
          temperature: dataHour.temperature,
          description: dataHour.description,
          icon: dataHour.icon,
          windSpeed: dataHour.windSpeed,
          windDirection: dataHour.windDirection
        }
        break
      case '15:00':
        temperatureList[5] = dataHour.temperature
        dataWeatherHours[5] = {
          active: true,
          temperature: dataHour.temperature,
          description: dataHour.description,
          icon: dataHour.icon,
          windSpeed: dataHour.windSpeed,
          windDirection: dataHour.windDirection
        }
        break
      case '18:00':
        temperatureList[6] = dataHour.temperature
        dataWeatherHours[6] = {
          active: true,
          temperature: dataHour.temperature,
          description: dataHour.description,
          icon: dataHour.icon,
          windSpeed: dataHour.windSpeed,
          windDirection: dataHour.windDirection
        }
        break
      case '21:00':
        temperatureList[7] = dataHour.temperature
        dataWeatherHours[7] = {
          active: true,
          temperature: dataHour.temperature,
          description: dataHour.description,
          icon: dataHour.icon,
          windSpeed: dataHour.windSpeed,
          windDirection: dataHour.windDirection
        }
        break
    }
  })
  return { temperatureList, dataWeatherHours }
}
