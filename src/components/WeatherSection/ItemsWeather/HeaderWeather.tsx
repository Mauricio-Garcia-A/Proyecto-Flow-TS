import CalendarIcon from '../../Icons/CalendarIcon'
import { MapLocationIcon } from '../../Icons/MapLocationIcon'

interface Props {
  nameCity: string
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
