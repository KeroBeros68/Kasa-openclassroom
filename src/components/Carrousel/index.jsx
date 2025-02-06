import PropTypes from 'prop-types'
import './carrousel.scss'
import toggleArrow from '../../assets/toggleArrow.svg'
import { useState } from 'react'

function Carrousel({ photos }) {
  const [indexPhotos, setIndex] = useState(0)

  function next() {
    if (indexPhotos === photos.length - 1) {
      setIndex(0)
    } else {
      setIndex(indexPhotos + 1)
    }
  }

  function prev() {
    if (indexPhotos === 0) {
      setIndex(photos.length - 1)
    } else {
      setIndex(indexPhotos - 1)
    }
  }

  return (
    <div className="carrousel">
      <div
        className="carrousel__container"
        style={{ transform: `translateX(${-indexPhotos * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            className={`carrousel__photos ${index === indexPhotos ? 'active' : ''}`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      {photos.length > 1 && (
        <div>
          <button
            type="button"
            className="carrousel__btn carrousel__btn--left"
            onClick={prev}
          >
            <img src={toggleArrow} className="" alt="" />
          </button>
          <button
            type="button"
            className="carrousel__btn carrousel__btn--right"
            onClick={next}
          >
            <img src={toggleArrow} className="" alt="" />
          </button>
          <div className="carrousel__cpt">
            {indexPhotos + 1}/{photos.length}
          </div>
        </div>
      )}
    </div>
  )
}

Carrousel.propTypes = {
  photos: PropTypes.array.isRequired,
}
export default Carrousel
