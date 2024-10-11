import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Head from 'next/head'
import Link from 'next/link'

export default function SightingsMap() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
    document.head.appendChild(link)
  }, [])

  const sightings = [
    { id: 1, lat: 40.7128, lng: -74.0060, description: "New York sighting" },
    { id: 2, lat: 51.5074, lng: -0.1278, description: "London sighting" },
    { id: 3, lat: 35.6762, lng: 139.6503, description: "Tokyo sighting" },
  ]

  return (
    <div className="container">
      <Head>
        <title>Sightings Map - UFO Hunters</title>
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
        <h1>UFO Sightings Map</h1>
        <div className="map-container" style={{ height: '600px', width: '100%' }}>
          <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {sightings.map((sighting) => (
              <Marker key={sighting.id} position={[sighting.lat, sighting.lng]}>
                <Popup>{sighting.description}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </main>
    </div>
  )
}