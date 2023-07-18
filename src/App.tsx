import './App.css'
import Home from './pages/Home'

const listOfCities = [
  'San Carlos de Bariloche',
  'Villa Carlos Paz',
  'Cafayate',
  'Ushuaia',
  'Puerto Iguazú'
]

function App (): JSX.Element {
  return (
    <>
      <header>
        Encabezado de la APP
      </header>
      <main>
        <Home />
      </main>
      <footer>
        Pie de Pagina de la APP
      </footer>
    </>
  )
}

export default App
