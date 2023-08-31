import { type WeatherCity } from '../../../types'
import TempMaxIcon from '../../Icons/TempMaxIcon'
import TempMinIcon from '../../Icons/TempMinIcon'

interface Props {
  temperature: string
  value: WeatherCity['temperature'] | string
}

export const TemperatureExtremes: React.FC<Props> = ({ temperature, value }) => {
  return (
    <div className='container-temperature-extremes' style={temperature === 'max' ? { flexDirection: 'row-reverse' } : {}}>
      { temperature === 'max'
        ? <TempMaxIcon fill='#880000' width='40px' />
        : <TempMinIcon fill='#29358e' width='40px' style={{ transform: 'scaleX(-1)' }} />
      }
      <div>
        <p>{temperature}:</p>
        <p>{value}°C</p>
      </div>
    </div>
  )
}
