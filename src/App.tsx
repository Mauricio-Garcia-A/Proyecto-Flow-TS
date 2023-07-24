import './App.scss'
import { Home } from './pages/Home/Home.jsx'
import {LIST_OF_CITIES} from './utils/ListCities.js'

function App (): JSX.Element {
  return (
    <>
      <header className='header-app'>
        <img src='/favicon.ico' alt='logo' />
        <h1> App Estado del Clima</h1>
      </header>
      <main>
        <Home cities={LIST_OF_CITIES} />
      </main>
      <footer className='footer-app'>
        <section>
            <p>© 2023 M.A.G. | Todos los derechos reservados.</p>
        </section>
      </footer>
    </>
  )
}

export default App
