import { type WeatherCity } from '../../../types'
import ClockUpdateIcon from '../../Icons/ClockUpdateIcon'

interface Props {
  dateHourMinute: WeatherCity['dateHourMinute']
  dateWeekday: WeatherCity['dateWeekday']
  dateDayMoment: WeatherCity['dateDayMoment']
}

export const UpdateTime: React.FC<Props> = ({ dateHourMinute, dateWeekday, dateDayMoment }) => {
  return (
    <div className='container-update-time'>
      <p><span>Última Actualización:</span></p>
     <div className='container-time-last-update'>
      <ClockUpdateIcon fill='grey' width='25px' />
      <p> {dateHourMinute}</p>

      <div>
        <p> {dateWeekday}</p>
        <h3> {dateDayMoment}</h3>
      </div>
    </div>
  </div>

  )
}
