import PropTypes from 'prop-types'
import './card.scss'

function Card({ title, cover }) {
  return (
    <article className="card">
      <img className="card__img" src={cover} alt={title}></img>
      <h2 className="card__title">{title}</h2>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}
export default Card
