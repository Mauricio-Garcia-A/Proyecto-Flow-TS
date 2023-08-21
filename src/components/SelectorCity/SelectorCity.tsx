import { type ListOfCities } from '../../types'
import { useState } from 'react'
import Select from 'react-select'

import './SelectorCity.scss'
import CityLocationIcon from '../Icons/CityLocationIcon'

interface Props {
  cities: ListOfCities
  setCity: any
}

export const SelectorCity: React.FC<Props> = ({ cities, setCity }) => {
  const [listCities, setListCities] = useState(
    cities.map(item => ({
      value: item.id,
      label: item.name,
      isDisabled: false
    }))
  )

  const handleSelectChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    // event.preventDefault()
    const updatedCities = listCities.map(item => (
      {
        ...item,
        isDisabled: item.value === event.value // es igual que decir ( item.value === event.value  ? true : false )
      }
    ))
    setListCities(updatedCities)
    setCity(event.value)
  }

  const customStyles = {
    control: (baseStyles: any, state: { isFocused: boolean }) => ({
      ...baseStyles,
      width: '400px',
      height: '40px',
      borderRadius: '30px',
      background: state.isFocused ? '#13121247' : 'rgba(80, 80, 80, 0.384)',
      boxShadow: '0px 7px 20px 1px rgba(0, 0, 0, 0.463)',
      border: '1px solid rgba(253, 253, 253, 0.3)',
      cursor: 'pointer',
      display: 'flex',
      textAlign: 'center',
      fontSize: '15pt'
    }),
    menu: (provided: any) => ({
      ...provided,
      height: 'auto',
      width: '86%',
      marginLeft: '7%',
      backdropFilter: 'blur(8px)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      padding: '20px 0px 20px 0px ',
      boxShadow: '0px 7px 20px 10px rgba(255, 255, 255, 0.3)'
    }),
    menuList: () => ({
      // maxHeight: null
    }),
    option: (provided: any, state: { isDisabled: boolean, isFocused: boolean }) => ({
      ...provided,
      padding: '10px 30px 10px 30px',
      color: state.isDisabled ? 'rgba(66, 66, 66, 1)' : 'white',
      backgroundColor: state.isFocused ? 'rgba(192, 192, 192, 0.161)' : 'transparent'
    })
  }

  return (
    <section className='container-selector-city'>
      <label>
        <CityLocationIcon width='35px' fill='rgba(0, 0, 0, 0.5)' />
        <h1>LISTA DE CIUDADES</h1>
      </label>
      <Select
        defaultValue={listCities[0]}
        options={listCities}
        onChange={handleSelectChange}

        isLoading={false}
        isSearchable={false}
        menuPlacement="auto"
        styles={customStyles}
      />
    </section>
  )
}
