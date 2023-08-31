export function FormattedCurrentDate () {
  const CurrentDayNumber = new Date().toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric' })
  const currentMonthYear = new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long' })

  function capitalize (word: string) {
    return word[0].toUpperCase() + word.slice(1)
  }

  const currentDate = `${capitalize(CurrentDayNumber)} de ${capitalize(currentMonthYear)}`

  return { currentDate }
}
