import WindIcon from '../../Icons/WindIcon'
import WindDirectionIcon from '../../Icons/WindDirectionIcon'

interface Props {
  windSpeed: number
  windGust: number
  windDeg: number
  windDirectionAbbreviation: string
  windDirection: string
}

export const WindInfo: React.FC<Props> = ({ windSpeed, windGust, windDeg, windDirectionAbbreviation, windDirection }) => {
  return (
    <>
      <div className='container-wind-description'>
        <WindIcon fill='white' width='25px' />
        <p>Viento de {windSpeed} km/h, con Ráfaga de {windGust} km/h </p>
      </div>
      <div className='container-wind-description'>
        <WindDirectionIcon fill='white' width='15px' style={{ transform: `rotate(${windDeg}deg)` }} />
        <p>{windDirectionAbbreviation} - ({windDirection})</p>
      </div>
    </>

  )
}
