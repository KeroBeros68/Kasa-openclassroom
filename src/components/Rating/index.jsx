import PropTypes from 'prop-types'
import neutralStar from '../../assets/emptyStar.svg'
import filledStar from '../../assets/filledStar.svg'
import './rating.scss'

function Rating({ rate }) {
  const totalStars = 5

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rate ? filledStar : neutralStar}
          className="rating__star"
        />
      ))}
    </div>
  )
}

Rating.propTypes = {
  rate: PropTypes.string,
}

export default Rating
