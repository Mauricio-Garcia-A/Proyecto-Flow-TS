import { useContext, useState } from 'react'
import CompassIcon from '../Icons/CompassIcon'
import GeolocationCityIcon from '../Icons/GeolocationCityIcon'
import './GeolocatedCity.scss'
import getGeolocation from '../../services/getGeolocation'
import { useWeatherCity } from '../../hooks/useWeatherCity'
import { ContextListCities } from '../../context/ContextListCities'

export const GeolocatedCity = () => {
  const { listCities, setListCities, setIdCitySelected } = useContext(ContextListCities)

  const [check, setCheck] = useState(false)
  const { coords, getLocation, errorGeo, loadingGeo } = getGeolocation()
  const { weatherCitySelected, loadingWeather } = useWeatherCity({ lat: coords.lat, lon: coords.lon })

  const handlerSwitch = () => {
    if (!check) {
      getLocation()
      if (!errorGeo && !loadingGeo) {
        const newListCities = listCities
        const newCity = {
          id: 10000000,
          name: weatherCitySelected.nameCity,
          state: '',
          country: 'AR',
          coord: {
            lon: coords.lon,
            lat: coords.lat
          }
        }
        const index = newListCities.findIndex(city => city.id === newCity.id)
        if (index !== -1) {
          newListCities[index] = newCity
        } else {
          newListCities.push(newCity)
        }
        setListCities(newListCities)
      }
    }
    setCheck(!check)
  }

  const handlerClick = () => {
    setIdCitySelected(10000000)
  }

  return (
    <section className='container-geolocated-city'>
      <header>
        <GeolocationCityIcon width='50px' />
        <h1>CIUDAD GEOLOCALIZADA</h1>
      </header>
      <main>
        <article>
          <div className='switch-geo-city' onClick={handlerSwitch}>
            <div className={check ? 'active' : 'desactive'}>
              <CompassIcon width='25px' />
            </div>
          </div>
        </article>
        <article>
          <p>Ubicacion Actual:
            {
              loadingGeo
                ? <span> Cargando...</span>
                : errorGeo
                  ? <span style={{ color: 'red' }}> Active la Geolocalizacion de su navegador</span>
                  : <span style={{ color: check ? 'orange' : 'red' }}>
                    {check
                      ? loadingWeather
                        ? <span> Cargando...</span>
                        : weatherCitySelected.nameCity
                      : 'Desactivada'
                    }
                  </span>
            }

          </p>
          <button disabled={!check } onClick={handlerClick}> seleccionar ciudad</button>
        </article>
      </main>
    </section>
  )
}
