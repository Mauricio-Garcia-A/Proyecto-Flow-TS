import TemperatureIcon from '../../Icons/TemperatureIcon'

interface Props {
  temperature: number
  thermalSensation: number
}

export const TemperatureInfo: React.FC<Props> = ({ temperature, thermalSensation }) => {
  return (
    <div className='container-temperature'>
      <div className='container-temperature-number'>
        <h1>{temperature}</h1>
        <div className='container-scale-temperature'>
          <h1> °C</h1>
          <TemperatureIcon fill='grey' width='35px' />
        </div>
      </div>
      <div className='separator' />
      <p>Sensacion Termica: <b>{thermalSensation}°C</b></p>
    </div>
  )
}
