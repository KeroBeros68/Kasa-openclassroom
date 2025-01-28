import { useLocation } from 'react-router'
import '../../styles/banner.scss'

function Banner() {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <div
      className={`banner ${location.pathname === '/about' ? 'about' : 'home'}`}
    >
      {location.pathname === '/' && (
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  )
}

export default Banner
