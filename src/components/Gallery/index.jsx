import Card from '../Cards'
import './gallery.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

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
        <Link
          key={`${lodge.id}`}
          to={`/lodges/${lodge.id}`}
          state={{ lodgeData: lodge }}
        >
          <Card title={lodge.title} cover={lodge.cover} />
        </Link>
      ))}
    </div>
  )
}

export default Gallery
