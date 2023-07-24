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
