import { API_URL, API_Key, UNITS, LANG, LIMIT } from './configAPI'

// Servicio De Datos Mteorológicos Actuales (Current Weather Data) de Ciudad Determinada (LATITUD, LONGITUD)
export function getWeatherCurrent({ lat, lon }) {
  const URL_WEATHER = `${API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=${UNITS}&lang=${LANG}`

  return fetch(URL_WEATHER)
    .then(response => response.json())
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
    .catch(err =>
      console.log(`getWeatherCurrent - Error Servicio API: ${err}`)
    )
}

// Servicio De Datos de Pronóstico Extendido de 5 días cada 3 horas (5 Day / 3 Hour Forecast) de Ciudad Determinada (LATITUD, LONGITUD)
export function getExtendedForecast({ lat, lon }) {
  const URL_EXTENDED_FORECAST = `${API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}&units=${UNITS}&lang=${LANG}`

  return fetch(URL_EXTENDED_FORECAST)
    .then(response => response.json())
    .then(data => {
      const { list } = data
      const dataForecast = list.map(item => {
        return {
          hour: new Date(item.dt * 1000).toLocaleTimeString('en-AR', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          day: new Date(item.dt * 1000).toLocaleDateString('es-AR'),
          monthName: new Date(item.dt * 1000).toLocaleDateString('es-AR', { month: 'long' }),
          dayName: new Date(item.dt * 1000).toLocaleDateString('es-AR', { weekday: 'short' }),
          dayNumber: new Date(item.dt * 1000).toLocaleDateString('es-AR', { day: 'numeric' }),
          icon: item.weather[0].icon,
          description: item.weather[0].description,
          temperature: item.main.temp,
          temperatureMin: item.main.temp_min,
          temperatureMax: item.main.temp_max,
          thermalSensation: item.main.feels_like,
          atmosphericPressure: item.main.pressure,
          humidity: item.main.humidity,
          visibility: item.visibility,
          clouds: item.clouds.all,
          windSpeed: item.wind.speed,
          windDirection: item.wind.deg,
          windGust: item.wind.gust
        }
      })

      const dataDays = []
      dataForecast.forEach(item => {
        if (!dataDays.includes(item.day)) {
          dataDays.push(item.day)
        }
      })

      const daysForecast = []
      dataDays.forEach(item => {
        daysForecast.push(
          {
            day: item,
            monthName: dataForecast.find(element => element.day === item)?.monthName,
            dayName: dataForecast.find(element => element.day === item)?.dayName,
            dayNumber: dataForecast.find(element => element.day === item)?.dayNumber,
            description: dataForecast.find(element => element.day === item)?.description,
            icon: dataForecast.find(element => element.day === item)?.icon.replace('n', 'd'),
            tempMax: Math.max(...dataForecast.filter(element => element.day === item).map(ele2 => ele2.temperatureMax)),
            tempMin: Math.min(...dataForecast.filter(element => element.day === item).map(ele2 => ele2.temperatureMin)),
            dataHours: dataForecast.filter(element => element.day === item)
          }
        )
      })

      return daysForecast
    })
    .catch(err => { console.log(`getExtendedForecast - Error Servicio API: ${err}`) })
}

// Servicio De Geocodificacion de Cidad (Geocoding API) determinados por (nombre})
export function getSearchCity({ nameCity }) {
  const URL_SEARCH_CITY = `${API_URL}/geo/1.0/direct?q=${nameCity}&limit=${LIMIT}&appid=${API_Key}`

  return fetch(URL_SEARCH_CITY)
    .then(response => response.json())
    .then(data => {
      const cities = data.map((city, i) => {
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
    .catch(err =>
      console.log(`getSearchCity - Error Servicio API: ${err}`)
    )
}

/*
// Servicio De Mapas Metereologicos (Weather Maps 1.0) determinados por ({layer}/{z}/{x}/{y})
export function getMapas({layer, x,y,z}) {

}
*/
