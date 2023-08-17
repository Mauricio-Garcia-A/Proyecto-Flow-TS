import { useState } from 'react'
import './ModalDaySelected.scss'
import GraphicIcon from '../Icons/GraphicIcon'
import { type DataHour } from '../../types'

const IconoCerrar = () => {
  return (
    <svg width="100%" height="100%" fill="currentColor" className='bi bi-x' viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  )
}

interface Props {
  children: React.ReactNode
  day: DataHour['dayName']
  number: DataHour['dayNumber']
  month: DataHour['monthName']
}

export default function ModalDaySelected ({ children, day, number, month }: Props) {
  const [estado, setEstado] = useState(false)
  return (
    <>
      <button onClick={() => { setEstado(true) } }>
          <GraphicIcon width='15px' fill='white'/>
          mas info
        </button>
      {estado && <div className='background-modal'>
        <div className='container-window-modal'>
          <header>
            <div>
              <h2>{day} <span >{number}</span> - </h2><h1>{month}</h1>
            </div>
            <button className='button-close-modal' onClick={() => { setEstado(false) }}>
              <IconoCerrar />
            </button>
          </header>
          <main >
            {children}
          </main>
        </div>
      </div>

      }
    </>
  )
}
