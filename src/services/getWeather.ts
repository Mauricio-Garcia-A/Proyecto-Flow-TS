import { type Coord } from '../types'
import { API_URL, API_KEY, UNITS, LANG, LIMIT } from './configAPI'

interface PropsCoord {
  lat: Coord['lat'] | undefined
  lon: Coord['lon'] | undefined
}

// Servicio De Datos Mteorológicos Actuales (Current Weather Data) de Ciudad Determinada (LATITUD, LONGITUD)
export async function getWeatherCurrent ({ lat, lon }: PropsCoord) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const URL_WEATHER = `${API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`

  return await fetch(URL_WEATHER)
    .then(async response => await response.json())
    .then(data => {
      const { weather, main, wind, clouds, visibility, sys, dt, name } = data

      const dataWeather = {
        nameCity: name,
        weatherDescription: weather[0].description,
        weatherIcon: weather[0].icon,
        temperature: main.temp,
        thermalSensation: main.feels_like,
        temperatureMin: main.temp_min,
        temperatureMax: main.temp_max,
        pressure: main.pressure,
        humidity: main.humidity,
        windSpeed: wind.speed,
        windDeg: wind.deg,
        windGust: wind.gust,
        cloudPercentage: clouds.all,
        sunRise: new Date(sys.sunrise * 1000).toLocaleTimeString('en-AR', { hour12: false, hour: '2-digit', minute: '2-digit' }),
        sunSet: new Date(sys.sunset * 1000).toLocaleTimeString('en-AR', { hour12: false, hour: '2-digit', minute: '2-digit' }),
        dateWeekday: new Date(dt * 1000).toLocaleDateString('es-AR', { weekday: 'short' }).toUpperCase(),
        dateHourMinute: new Date(dt * 1000).toLocaleTimeString('en-AR', { hour12: true, hour: '2-digit', minute: '2-digit' }).split(' ')[0],
        dateDayMoment: new Date(dt * 1000).toLocaleTimeString('en-AR', { hour12: true, hour: '2-digit', minute: '2-digit' }).split(' ')[1],
        visibility
      }
      return dataWeather
    })
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    .catch(err => { console.log(`getWeatherCurrent - Error Servicio API: ${err}`) }
    )
}

// Servicio De Datos de Pronóstico Extendido de 5 días cada 3 horas (5 Day / 3 Hour Forecast) de Ciudad Determinada (LATITUD, LONGITUD)
export async function getExtendedForecast ({ lat, lon }: PropsCoord) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const URL_EXTENDED_FORECAST = `${API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${UNITS}&lang=${LANG}`

  return await fetch(URL_EXTENDED_FORECAST)
    .then(async response => await response.json())
    .then(data => {
      const { list } = data
      const dataForecast = list.map((item: { dt: number, weather: any, main: any, visibility: number, clouds: any, wind: any }) => {
        const { dt, weather, main, visibility, clouds, wind } = item

        return {
          hour: new Date(dt * 1000).toLocaleTimeString('en-AR', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          day: new Date(dt * 1000).toLocaleDateString('es-AR'),
          monthName: new Date(dt * 1000).toLocaleDateString('es-AR', { month: 'long' }),
          dayName: new Date(dt * 1000).toLocaleDateString('es-AR', { weekday: 'short' }),
          dayNumber: new Date(dt * 1000).toLocaleDateString('es-AR', { day: 'numeric' }),
          icon: weather[0].icon,
          description: weather[0].description,
          temperature: main.temp,
          temperatureMin: main.temp_min,
          temperatureMax: main.temp_max,
          thermalSensation: main.feels_like,
          atmosphericPressure: main.pressure,
          humidity: main.humidity,
          visibility,
          clouds: clouds.all,
          windSpeed: wind.speed,
          windDirection: wind.deg,
          windGust: wind.gust
        }
      })

      const dataDays: any[] = []
      dataForecast.forEach((item: { day: any }) => {
        if (!dataDays.includes(item.day)) {
          dataDays.push(item.day)
        }
      })

      const daysForecast: any[] = []
      dataDays.forEach(item => {
        daysForecast.push(
          {
            day: item,
            monthName: dataForecast.find((element: { day: any }) => element.day === item)?.monthName,
            dayName: dataForecast.find((element: { day: any }) => element.day === item)?.dayName,
            dayNumber: dataForecast.find((element: { day: any }) => element.day === item)?.dayNumber,
            description: dataForecast.find((element: { day: any }) => element.day === item)?.description,
            icon: dataForecast.find((element: { day: any }) => element.day === item)?.icon.replace('n', 'd'),
            tempMax: Math.max(...dataForecast.filter((element: { day: any }) => element.day === item).map((ele2: { temperatureMax: any }) => ele2.temperatureMax)),
            tempMin: Math.min(...dataForecast.filter((element: { day: any }) => element.day === item).map((ele2: { temperatureMin: any }) => ele2.temperatureMin)),
            dataHours: dataForecast.filter((element: { day: any }) => element.day === item)
          }
        )
      })

      return daysForecast
    })
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    .catch(err => { console.log(`getExtendedForecast - Error Servicio API: ${err}`) })
}

// Servicio De Geocodificacion de Cidad (Geocoding API) determinados por (nombre})
export async function getSearchCity ({ nameCity }: { nameCity: string }) {
  const URL_SEARCH_CITY = `${API_URL}/geo/1.0/direct?q=${nameCity}&limit=${LIMIT}&appid=${API_KEY}`

  return await fetch(URL_SEARCH_CITY)
    .then(async response => await response.json())
    .then(data => {
      const cities = data.map((city: { name: string, state: string, country: string, lon: number, lat: number }) => {
        return {
          id: (Math.floor(Math.random() * 999999)),
          name: city.name,
          state: city.state,
          country: city.country,
          coord: {
            lon: city.lon,
            lat: city.lat
          }
        }
      })

      return cities
    })
    .catch(err => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`getSearchCity - Error Servicio API: ${err}`)
    }
    )
}

/*
// Servicio De Mapas Metereologicos (Weather Maps 1.0) determinados por ({layer}/{z}/{x}/{y})
export function getMapas({layer, x,y,z}) {

}
*/
