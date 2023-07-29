export default function formatWindDirection (numberDegrees = 0) {
  if (numberDegrees > 360) {
    const numberTurns = Math.trunc(numberDegrees / 360)
    numberDegrees = numberDegrees - (360 * numberTurns)
  }

  const windDirectionsList = [
    { degrees: 0, direction: 'Norte', abbreviation: 'N' },
    { degrees: 22.5, direction: 'Norte-Nordeste', abbreviation: 'NNE' },
    { degrees: 45, direction: 'Nordeste', abbreviation: 'NE' },
    { degrees: 67.5, direction: 'Este-Nordeste', abbreviation: 'ENE' },
    { degrees: 90, direction: 'Este', abbreviation: 'E' },
    { degrees: 112.5, direction: 'Este-Sudeste', abbreviation: 'ESE' },
    { degrees: 135, direction: 'Sudeste', abbreviation: 'SE' },
    { degrees: 157.5, direction: 'Sur-Sudeste', abbreviation: 'SSE' },
    { degrees: 180, direction: 'Sur', abbreviation: 'S' },
    { degrees: 202.5, direction: 'Sur-Sudoeste', abbreviation: 'SSW' },
    { degrees: 225, direction: 'Sudoeste', abbreviation: 'SW' },
    { degrees: 247.5, direction: 'Oeste-Sudoeste', abbreviation: 'WSW' },
    { degrees: 270, direction: 'Oeste', abbreviation: 'W' },
    { degrees: 292.5, direction: 'Oeste-Noroeste', abbreviation: 'WNW' },
    { degrees: 315, direction: 'Noroeste', abbreviation: 'NW' },
    { degrees: 337.5, direction: 'Norte-Noroeste', abbreviation: 'NNW' },
    { degrees: 360, direction: 'Norte', abbreviation: 'N' }
  ]

  const windDirectionSelected = windDirectionsList.filter(direction => ((direction.degrees - 11.25) < numberDegrees) && ((direction.degrees + 11.25) >= numberDegrees))
  const windDirectionAbbreviation = windDirectionSelected[0].abbreviation
  const windDirection = windDirectionSelected[0].direction

  return { windDirectionAbbreviation, windDirection }
}
