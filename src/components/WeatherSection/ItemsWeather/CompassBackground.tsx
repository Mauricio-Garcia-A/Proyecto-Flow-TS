import React from 'react'
import { type WeatherCity } from '../../../types'

interface Props {
  windDeg: WeatherCity['windDeg']
}

export const CompassBackground: React.FC<Props> = ({ windDeg }) => {
  return (
    <>
      <div className='container-background-compass'>
        <img src='/brujula2.png' />
      </div>
      <div className='container-background-needle'>
        <img src='/aguja2.png' style={{ transform: `rotate(${windDeg}deg)` }} />
      </div>
    </>
  )
}
