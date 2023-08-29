import React from 'react'
import { type WeatherCity } from '../../../types'

interface Props {
  windDeg: WeatherCity['windDeg']
}

export const CompassBackground: React.FC<Props> = ({ windDeg }) => {
  return (
    <>
      <div className='container-background-compass'>
        <img src='brujula2.webp' />
      </div>
      <div className='container-background-needle'>
        <img src='aguja2.webp' style={{ transform: `rotate(${windDeg}deg)` }} />
      </div>
    </>
  )
}
