import React, { type ReactNode, useState } from 'react'
import { LIST_OF_CITIES } from '../utils/ListCities'
import { type ListOfCities } from '../types'

interface ContextProps {
  listCities: ListOfCities | any
  idCitySelected: number
  setIdCitySelected: React.Dispatch<React.SetStateAction<number>>
  setListCities: React.Dispatch<React.SetStateAction<ListOfCities>> | any
}

export const ContextListCities = React.createContext<ContextProps | undefined>(undefined)

interface Props {
  children: ReactNode
}

export function ContextListCitiesProvider ({ children }: Props) {
  const [idCitySelected, setIdCitySelected] = useState(LIST_OF_CITIES[0].id)
  const [listCities, setListCities] = useState(LIST_OF_CITIES)

  return (
    <ContextListCities.Provider value={{
      listCities,
      idCitySelected,
      setIdCitySelected,
      setListCities
    }}>
      {children}
    </ ContextListCities.Provider >
  )
}
