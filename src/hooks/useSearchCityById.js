import {LIST_OF_CITIES} from '../utils/ListCities'

export function useSearchCityById({id}) {
  const citySelected = LIST_OF_CITIES.find(city => city.id == id)
  return citySelected
}
