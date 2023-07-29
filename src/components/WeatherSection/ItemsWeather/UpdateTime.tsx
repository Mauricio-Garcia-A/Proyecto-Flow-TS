import ClockUpdateIcon from '../../Icons/ClockUpdateIcon'

interface Props {
  dateHourMinute: string
  dateWeekday: string
  dateDayMoment: string
}

export const UpdateTime: React.FC<Props> = ({ dateHourMinute, dateWeekday, dateDayMoment }) => {
  return (
    <div className='container-time-last-update'>
      <ClockUpdateIcon fill='grey' width='25px' />
      <p> {dateHourMinute}</p>

      <div>
        <p> {dateWeekday}</p>
        <h3> {dateDayMoment}</h3>
      </div>
    </div>
  )
}
