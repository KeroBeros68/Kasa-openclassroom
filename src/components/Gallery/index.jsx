import Card from '../Cards'
import '../../styles/gallery.scss'
import { useEffect, useState } from 'react'

function Gallery() {
  const [lodges, setLodges] = useState([])

  useEffect(() => {
    fetch('/data.json') // Chemin depuis `public/`
      .then((response) => response.json()) // Convertit en JSON
      .then((json) => setLodges(json)) // Stocke les données dans le state
  }, [])
  return (
    <div className="gallery">
      {lodges.map((lodge) => (
        <Card key={`${lodge.id}`} title={lodge.title} cover={lodge.cover} />
      ))}
    </div>
  )
}

export default Gallery
