/* eslint-disable @typescript-eslint/restrict-plus-operands */
interface Props {
  sunRise: string
  sunSet: string
  dateHourMinute: string
  dateDayMoment: string
}

export const SunBarProgress: React.FC<Props> = ({ sunRise, sunSet, dateHourMinute, dateDayMoment }) => {
  function calculatePercentage (sunriseTime: string, sunsetTime: string, currentTime: string, momentDay: string) {
    const [sunriseHours, sunriseMinutes] = sunriseTime.split(':').map(Number)
    const [sunsetHours, sunsetMinutes] = sunsetTime.split(':').map(Number)
    const [currentHours, currentMinutes] = currentTime.split(':').map(Number)

    let differenceHours = 0
    if (momentDay === 'PM') {
      differenceHours = 12
    }

    const amountMinutesSunrise = (sunriseHours * 60) + sunriseMinutes
    const amountMinutesSunset = (sunsetHours * 60) + sunsetMinutes
    const amountMinutesCurrent = ((currentHours + differenceHours) * 60) + currentMinutes

    if ((amountMinutesCurrent < amountMinutesSunrise) || (amountMinutesCurrent > amountMinutesSunset)) {
      return 0
    }

    const durationTotal = amountMinutesSunset - amountMinutesSunrise
    const timeElapsed = amountMinutesCurrent - amountMinutesSunrise

    return ((timeElapsed / durationTotal) * 100)
  }

  const completePercentage = calculatePercentage(sunRise, sunSet, dateHourMinute, dateDayMoment)
  const incompletePercentage = (334 - completePercentage)

  return (
    <svg height="440" width="440" className='progress'>
      <circle className='progress-circle' cx="220" cy="220" r="195" pathLength='334' fill="transparent" />
      <circle className='progress-circle-bar' cx="220" cy="220" r="195" pathLength='334' fill="transparent" strokeDasharray={`${completePercentage} ${incompletePercentage}`} />

    </svg>
  )
}
