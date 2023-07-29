interface Props {
  weatherIcon: string
  weatherDescription: string
}

export const StateWeather: React.FC<Props> = ({ weatherIcon, weatherDescription }) => {
  return (
    <div className='container-illustration-state-weather'>
      <img src={`/IconsWeather/${weatherIcon}.png`} alt='icon-weather' />
      <h2>{weatherDescription}</h2>
      <div className='separator' />
    </div>
  )
}
