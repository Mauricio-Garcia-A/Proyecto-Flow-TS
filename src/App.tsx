import './App.scss'
import { ContextListCitiesProvider } from './context/ContextListCities.js'
import { Home } from './pages/Home/Home.jsx'

function App (): JSX.Element {
  return (
    <div className='container-app'>
      <header className='header-app'>
        <img src='favicon.ico' alt='logo' />
        <h1> APP CLIMA - M.A.G</h1>
      </header>
      <main className='main-app'>
        <ContextListCitiesProvider >
          <Home />
        </ContextListCitiesProvider>
      </main>
      <footer className='footer-app'>
        <section>
            <p>© 2023 M.A.G. | Todos los derechos reservados.</p>
        </section>
      </footer>
    </div>
  )
}

export default App
