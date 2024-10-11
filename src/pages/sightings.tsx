import { useState } from 'react'
import useSWR from 'swr'
import Head from 'next/head'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Sightings() {
  const [page, setPage] = useState(1)
  const { data, error } = useSWR(`/api/sightings?page=${page}`, fetcher)

  if (error) return <div className="container">Failed to load</div>
  if (!data) return <div className="container">Loading...</div>

  return (
    <div className="container">
      <Head>
        <title>Recent Sightings - UFO Hunters</title>
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
        <h1>Recent UFO Sightings</h1>
        <ul className="sighting-list">
          {data.sightings.map((sighting: any) => (
            <li key={sighting.id}>
              <strong>{sighting.date}</strong> - {sighting.location}
              <p>{sighting.description}</p>
            </li>
          ))}
        </ul>
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </main>
    </div>
  )
}