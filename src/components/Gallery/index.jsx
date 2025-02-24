import Card from '../Cards'
import './gallery.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Gallery() {
  const [lodges, setLodges] = useState([])

  useEffect(() => {
    fetch(
      'https://github.com/KeroBeros68/Kasa-openclassroom/blob/main/public/data.json',
    )
      .then((response) => response.json())
      .then((json) => setLodges(json))
  }, [])

  function slugify(text) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '')
  }

  return (
    <div className="gallery">
      {lodges.map((lodge) => (
        <Link
          key={`${lodge.id}`}
          to={`/lodges/${slugify(lodge.title)}`}
          state={{ lodgeData: lodge }}
        >
          <Card title={lodge.title} cover={lodge.cover} />
        </Link>
      ))}
    </div>
  )
}

export default Gallery
