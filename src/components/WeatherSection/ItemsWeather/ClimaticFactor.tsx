import { type WeatherCity } from '../../../types'
import CloudPercentage from '../../Icons/CloudPercentage'
import HumidityIcon from '../../Icons/HumidityIcon'
import PressureIcon from '../../Icons/PressureIcon'
import VisibilityIcon from '../../Icons/VisibilityIcon'

interface Props {
  factor: string
  value: WeatherCity[ 'pressure' | 'humidity' | 'visibility' | 'cloudPercentage' ]
  position: string
}

export const ClimaticFactor: React.FC<Props> = ({ factor, value, position }) => {
  const FACTORS = [
    {
      name: 'pressure',
      title: 'Presion Atm',
      unit: 'hPa',
      icon: <PressureIcon fill='white' width='20px' style={{ transform: 'rotate(90deg)' }} />
    },
    {
      name: 'humidity',
      title: 'Humedad',
      unit: '%',
      icon: <HumidityIcon fill='white' width='20px' />
    },
    {
      name: 'visibility',
      title: 'Visibilidad',
      unit: 'mts',
      icon: <VisibilityIcon fill='white' width='20px' />
    },
    {
      name: 'cloudPercentage',
      title: 'Nubosidad',
      unit: '%',
      icon: <CloudPercentage fill='white' width='20px' />
    }
  ]
  const factorSelected = FACTORS.find(ftr => ftr.name === factor)

  return (
    <div className='container-climatic-factor'>
      <p>{factorSelected?.title}</p>
      <div style={position === 'right' ? { flexDirection: 'row-reverse' } : {}}>
        <p>{value} {factorSelected?.unit}</p>
        { factorSelected?.icon}
      </div>
    </div>
  )
}
