import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>UFO Hunters</title>
        <meta name="description" content="UFO sightings tracker" />
        <link rel="icon" href="/favicon.ico" />
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
        <h2>Welcome to UFO Hunters</h2>
        <p>UFO Hunters is your go-to resource for the latest information on UFO sightings around the world. Explore recent sightings, view them on a map, and analyze sighting statistics.</p>
        <div className="featured-sighting">
          <h3>Featured Sighting</h3>
          <p>Date: 2023-05-25</p>
          <p>Location: Phoenix, Arizona</p>
          <p>Description: Multiple witnesses reported seeing a large, triangular craft hovering silently over the city for several minutes before it suddenly accelerated and disappeared.</p>
        </div>
      </main>
    </div>
  )
}