import { useLocation } from 'react-router'
import PropTypes from 'prop-types'
import './banner.scss'

function Banner({ bannerImg }) {
  const location = useLocation()

  return (
    <div className={`banner`}>
      <img src={bannerImg} className="banner__img" />
      {location.pathname === '/' && (
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  )
}

Banner.propTypes = {
  bannerImg: PropTypes.string.isRequired,
}
export default Banner
