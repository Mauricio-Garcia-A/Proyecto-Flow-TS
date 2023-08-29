import { useState, useContext } from 'react'
import Select from 'react-select'

import './SelectorCity.scss'
import { ContextListCities } from '../../context/ContextListCities'

export const SelectorCity = () => {
  const { setIdCitySelected, listCities } = useContext(ContextListCities)

  const [citiesFomated, setCitiesFomated] = useState(
    listCities.map(city => ({
      value: city.id,
      label: city.name,
      isDisabled: false
    }))
  )

  const handleSelectChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    // event.preventDefault()
    const updatedCities = citiesFomated.map(city => (
      {
        ...city,
        isDisabled: city.value === event.value // es igual que decir ( city.value === event.value  ? true : false )
      }
    ))
    setCitiesFomated(updatedCities)
    setIdCitySelected(event.value)
  }

  const customStyles = {
    control: (baseStyles: any, state: { isFocused: boolean }) => ({
      ...baseStyles,
      width: '400px',
      height: '41px',
      borderRadius: '30px',
      background: state.isFocused ? 'rgba(80, 80, 80, 0.384)' : '#13121247',
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
      backgroundColor: 'rgba(14, 14, 14, 0.95)',
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
      <Select
        defaultValue={citiesFomated[0]}
        options={citiesFomated}
        onChange={handleSelectChange}

        isLoading={false}
        isSearchable={false}
        menuPlacement="auto"
        styles={customStyles}
      />
    </section>
  )
}
