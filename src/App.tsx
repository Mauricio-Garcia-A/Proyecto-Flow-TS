import './App.css'
import { Home } from './pages/Home'
import {LIST_OF_CITIES} from './utils/ListCities.js'

function App (): JSX.Element {
  return (
    <>
      <header>
        Encabezado de la APP
      </header>
      <main>
        <Home cities={LIST_OF_CITIES} />
      </main>
      <footer>
        Pie de Pagina de la APP
      </footer>
    </>
  )
}

export default App
