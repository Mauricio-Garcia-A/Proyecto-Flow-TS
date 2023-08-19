import { type WeatherCity } from '../types'

export default function formattedTimeError ({ dateHourMinute, dateDayMoment }: Pick<WeatherCity, 'dateHourMinute' | 'dateDayMoment'>) {
  if (dateDayMoment === 'AM') {
    dateHourMinute = dateHourMinute.replace('12:', '00:')
  }
  return { dateHourMinute }
}
