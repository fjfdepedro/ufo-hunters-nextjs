import type { NextApiRequest, NextApiResponse } from 'next'

type Sighting = {
  id: number
  date: string
  location: string
  description: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ sightings: Sighting[] }>
) {
  // This is mock data. In a real application, you'd fetch this from a database.
  const sightings: Sighting[] = [
    { id: 1, date: '2023-05-20', location: 'New York, USA', description: 'Bright lights in the sky' },
    { id: 2, date: '2023-05-19', location: 'London, UK', description: 'Disc-shaped object hovering' },
    { id: 3, date: '2023-05-18', location: 'Tokyo, Japan', description: 'Strange patterns in the clouds' },
  ]

  res.status(200).json({ sightings })
}