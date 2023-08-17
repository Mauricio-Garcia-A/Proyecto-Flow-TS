import CalendarIcon from '../../Icons/CalendarIcon'
import { MapLocationIcon } from '../../Icons/MapLocationIcon'
import { type WeatherCity } from '../../../types'

interface Props {
  nameCity: WeatherCity['nameCity']
  currentDate: string
}

export const HeaderWeather: React.FC<Props> = ({ nameCity, currentDate }) => {
  return (
    <div className='container-header-weather'>
      <div>
        <MapLocationIcon fill='white' width='40px' />
        <h1>{nameCity}</h1>
      </div>
      <div className='separator3' />
      <div>
        <CalendarIcon fill='white' width='20px'/>
        <p> {currentDate} </p>
      </div>
    </div>
  )
}
