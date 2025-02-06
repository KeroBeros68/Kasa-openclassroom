import PropTypes from 'prop-types'
import './tags.scss'

function Tags({ tag }) {
  return (
    <div className="tag">
      <span className="tag__title">{tag}</span>
    </div>
  )
}

Tags.propTypes = {
  tag: PropTypes.string.isRequired,
}
export default Tags
