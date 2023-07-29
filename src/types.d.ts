type CityName = string
type CityId = string
type CityState = string
type CityCountry = string

export interface Coord {
  lon: number
  lat: number
}

export interface City {
  id: CityId
  name: CityName
  state: CityState
  country: CityCountry
  coord: Coord
}

export type ListOfCities = City[]

export interface WeatherCity {
  nameCity: CityName
  weatherDescription: string
  weatherIcon: string
  temperature: number
  thermalSensation: number
  temperatureMin: number
  temperatureMax: number
  pressure: number
  humidity: number
  windSpeed: number
  windDeg: number
  windGust: number
  cloudPercentage: number
  sunRise: string
  sunSet: string
  dateWeekday: string
  dateHourMinute: string
  dateDayMoment: string
  visibility: number
}

export interface DataHour {
  hour: string
  day: string
  monthName: string
  dayName: string
  dayNumber: string
  icon: string
  description: string
  temperature: number
  temperatureMin: number
  temperatureMax: number
  thermalSensation: number
  atmosphericPressure: number
  humidity: number
  visibility: number
  clouds: number
  windSpeed: number
  windDirection: number
  windGust: number
}

export interface Forecast {
  day: string
  monthName: string
  dayName: string
  dayNumber: string
  description: string
  icon: string
  tempMax: number
  tempMin: number
  dataHours: DataHour[]
}

export type ExtendedForecast = Forecast[]
