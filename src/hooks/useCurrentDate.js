export function useCurrentDate () {
  const CurrentDayNumber = new Date().toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric' })
  const currentMonthYear = new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long' })

  function capitalize (word) {
    return word[0].toUpperCase() + word.slice(1)
  }
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const currentDate = `${capitalize(CurrentDayNumber)} de ${capitalize(currentMonthYear)}`

  return { currentDate }
}
