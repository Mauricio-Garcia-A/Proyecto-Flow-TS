import { useState } from 'react'

interface Coords {
  lat: number | null
  lon: number | null
}

export default function getGeolocation () {
  const [coords, setCoords] = useState<Coords>({ lat: null, lon: null })
  const [errorGeo, setErrorGeo] = useState(false)
  const [loadingGeo, setLoadingGeo] = useState(false)

  const getLocation = () => {
    setLoadingGeo(true)
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          })
          setErrorGeo(false)
          setLoadingGeo(false)
        },
        error => {
          setErrorGeo(true)
          setLoadingGeo(false)
          console.error(error)
        }
      )
    } else {
      setErrorGeo(true)
      setLoadingGeo(false)
      console.error('Geolocation is not supported by this browser.')
    }
  }

  return {
    coords,
    getLocation,
    errorGeo,
    loadingGeo
  }
}
