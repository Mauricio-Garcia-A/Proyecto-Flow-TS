import { type ListOfCities } from '../../types'
import { type ChangeEvent } from 'react'

interface Props {
  cities: ListOfCities
  setCity: any
}

export const SelectorCity: React.FC<Props> = ({ cities, setCity }) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value)
  }
  return (
    <section>
      <select name='cities' id='cities' onChange={handleSelectChange} >
        {cities.map(city => {
          return (
            <option key={city.id} value={city.id}>{city.name}</option>
          )
        })}
      </select>
    </section>
  )
}
