import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import Head from 'next/head'
import Link from 'next/link'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function Stats() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'UFO Sightings',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(0, 255, 0, 0.6)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#00ff00',
        },
      },
      title: {
        display: true,
        text: 'UFO Sightings by Month',
        color: '#00ff00',
      },
    },
    scales: {
      y: {
        ticks: { color: '#00ff00' },
        grid: { color: '#333333' },
      },
      x: {
        ticks: { color: '#00ff00' },
        grid: { color: '#333333' },
      },
    },
  }

  return (
    <div className="container">
      <Head>
        <title>Statistics - UFO Hunters</title>
      </Head>

      <header>
        <div className="logo">
          <h1>UFO Hunters</h1>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sightings">Recent Sightings</Link></li>
            <li><Link href="/map">Sightings Map</Link></li>
            <li><Link href="/stats">Statistics</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>UFO Sightings Statistics</h1>
        <div className="stats-container">
          <Bar data={data} options={options} />
        </div>
      </main>
    </div>
  )
}