import { useState, useContext } from 'react'
import { SearchCityIcon } from '../Icons/SearchCityIcon'
import { SearchIcon } from '../Icons/SearchIcon'
import './SearchCity.scss'
import { useSearchCityByName } from '../../hooks/useSearchCityByName'
import { ContextListCities } from '../../context/ContextListCities'

export const SearchCity = () => {
  const { listCities, setListCities, setIdCitySelected } = useContext(ContextListCities)
  const [menuVisibility, setMenuVisibility] = useState(false)
  const [queryCity, setQueryCity] = useState(null)
  const { listCitiesSearched, loadingSearch } = useSearchCityByName({ queryNameCity: queryCity })

  let query = ' '

  const handleInputChange = (event)  => {
    query = (event.target.value)
  }

  const handleClickSearch = () => {
    setMenuVisibility(true)
    if (query === '') {
      query = ' '
    }
    setQueryCity(query)
  }

  const handleSelectedCity = (idSelected) => {
    const newListCities = listCities
    const index1 = listCitiesSearched.findIndex(city => city.id === idSelected)
    const newCity = {
      id: listCitiesSearched[index1].id,
      name: listCitiesSearched[index1].nameCity,
      state: listCitiesSearched[index1].state,
      country: listCitiesSearched[index1].country,
      coord: {
        lon: listCitiesSearched[index1].coord.lon,
        lat: listCitiesSearched[index1].coord.lat
      }
    }

    const index2 = newListCities.findIndex(city => city.id === newCity.id)
    if (index2 !== -1) {
      newListCities[index2] = newCity
    } else {
      newListCities.push(newCity)
    }
    setListCities(newListCities)
    setIdCitySelected(idSelected)
    setMenuVisibility(false)
  }

  return (
    <div className='container-search-city'>
      <main>
        <section>
          <input
            type='text'
            name='querySearchNameCity'
            placeholder='Nombre de la Ciudad'
            onChange={handleInputChange}
          />
          <div className='container-button-search' onClick={handleClickSearch}>
            <SearchIcon width='15px' />
          </div>
        </section>
        <section className='container-city-search-list' style={{ visibility: menuVisibility? 'visible':'hidden' }}>
          <header>
            <p>Resultados de la busqueda:</p>
            <button onClick={() => setMenuVisibility(false)}>x</button>
          </header>
          {
            loadingSearch
              ? <p> Cargando... </p>
              :<>
                {
                  !listCitiesSearched.length  // Si la lista esta bacia
                    ? <h3>No se han encontrado redultados de su busqueda</h3>
                    :listCitiesSearched.map(city => {
                      return (
                        <p key={city.id} onClick={()=>handleSelectedCity(city.id)}> {city.name}, {city.state}, {city.country}</p>
                      )
                    })
                }
              </>
          }
        </section>
      </main>
    </div>
  )
}
