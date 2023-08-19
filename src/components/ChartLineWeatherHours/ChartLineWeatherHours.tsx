import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { type DataHour } from '../../types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface temperature {
  temperature: DataHour['temperature']
}
interface Props {
  tempMax: number
  tempMin: number
  temperatures: temperature[]
}

export const ChartLineWeatherHours: React.FC<Props> = ({ tempMax, tempMin, temperatures }) => {
  const optionsGraph = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        position: 'bottom' as const
      },
      title: {
        display: false,
        text: 'Grafico Tempratura por hora'
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: function (tooltipItem: { formattedValue: string }) {
            return `${tooltipItem.formattedValue} °C`
          }
        }
      }
    },
    scales: {
      y: {
        min: (tempMin - 2),
        max: (tempMax + 2),
        ticks: {
          color: 'grey',
          font: {
            size: '12pt'
          }
        },
        grid: {
          color: '#8080804e'
        }
      },
      x: {
        ticks: {
          color: 'white',
          font: {
            size: '10pt'
          }
        },
        grid: {
          color: '#6c0a0a99'
        }
      }
    }

  }

  const hours = ['00:00 hs', '03:00 hs', '06:00 hs', '09:00 hs', '12:00 hs', '15:00 hs', '18:00 hs', '21:00 hs']

  const data = {
    labels: hours,
    datasets: [
      {
        label: '',
        data: temperatures,
        tension: 0.4,
        fill: true,
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: 'rgba(220, 221, 225, 0.13)',
        pointRadius: 5,
        pointBorderColor: 'rgba(220, 221, 225)',
        pointBackgroundColor: '#2c287de4'

      }
    ]
  }

  return (
      <Line
        options = {optionsGraph}
        data={data}
        width='500px'
        height='120px'
      />
  )
}
