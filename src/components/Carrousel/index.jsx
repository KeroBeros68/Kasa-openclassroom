import PropTypes from 'prop-types'
import './carrousel.scss'
import toggleArrow from '../../assets/toggleArrow.svg'
import { useState } from 'react'

function Carrousel({ photos }) {
  const [indexPhotos, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(3)
  const [nextIndex, setNextIndex] = useState(1)
  const [direction, setDirection] = useState('next')

  function next() {
    setDirection('next')
    setPrevIndex(indexPhotos)
    setIndex((prevIndex) => (prevIndex + 1) % photos.length)
    setNextIndex((indexPhotos + 2) % photos.length)
  }

  function prev() {
    setDirection('prev')
    setPrevIndex(indexPhotos)
    setIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
    setNextIndex((indexPhotos - 2 + photos.length) % photos.length)
  }

  return (
    <div className="carrousel">
      <div className="carrousel__container">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            className={`carrousel__photos ${index === indexPhotos ? 'active' : ''} ${index === prevIndex ? (direction === 'next' ? 'exit-left' : 'exit-right') : ''} ${index === nextIndex ? (direction === 'prev' ? 'exit-left' : 'exit-right') : ''}`}
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
