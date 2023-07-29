import SunRiseIcon from '../../Icons/SunRiseIcon'
import SunSetIcon from '../../Icons/SunSetIcon'

interface Props {
  sunEvent: string
  hourMinute: string
}
export const SunEvent: React.FC<Props> = ({ sunEvent, hourMinute }) => {
  let sunrise = true
  if (sunEvent !== 'sunRise') {
    sunrise = false
  }

  return (
    <div className='sun-events'>
      {sunrise
        ? <SunRiseIcon fill='#f3ce00' width='50px' />
        : <SunSetIcon fill='#f3ce00' width='50px' />
      }
      <p>{hourMinute} hs</p>
    </div>
  )
}
