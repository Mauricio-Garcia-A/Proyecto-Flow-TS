import { useState } from 'react'
import CityLocationIcon from '../Icons/CityLocationIcon'
import GeolocationCityIcon from '../Icons/GeolocationCityIcon'
import { SearchCityIcon } from '../Icons/SearchCityIcon'
import './NavBar.scss'
import { GeolocatedCity } from '../GeolocatedCity/GeolocatedCity'
import { SelectorCity } from '../SelectorCity/SelectorCity'
import { SearchCity } from '../SearchCity/SearchCity'

export const NavBar = () => {
  const [activeItem, setActiveItem] = useState('item2')

  const handleItemClick = (item: string): void => {
    setActiveItem(item)
  }

  return (
    <section className='container-navbar'>
      <nav>
        <ul>
          <li
            className={`item1 ${activeItem === 'item1' ? 'active' : ''}`}
            onClick={() => { handleItemClick('item1') }}
          >
            <GeolocationCityIcon width='50px' />
            <h1>CIUDAD GEOLOCALIZADA</h1>
          </li>
          <li
            className={`item2 ${activeItem === 'item2' ? 'active' : ''}`}
            onClick={() => { handleItemClick('item2') }}
          >
            <CityLocationIcon width='50px' />
            <h1>LISTA DE CIUDADES</h1>
          </li>
          <li
            className={`item3 ${activeItem === 'item3' ? 'active' : ''}`}
            onClick={() => { handleItemClick('item3') }}
          >
            <SearchCityIcon width='50px' />
            <h1>BUSQUEDAD DE CIUDAD</h1>
          </li>
        </ul>
      </nav>
      <main className='content-select-city-navbar'>
        <article className={`item1 ${activeItem === 'item1' ? 'active' : ''}`} >
          <GeolocatedCity />
        </article>
        <article className={`item2 ${activeItem === 'item2' ? 'active' : ''}`} >
          <SelectorCity />
        </article>
        <article className={`item3 ${activeItem === 'item3' ? 'active' : ''}`} >
          <SearchCity />
        </article>
      </main>

    </section>
  )
}
