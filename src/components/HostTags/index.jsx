import PropTypes from 'prop-types'
import './hostTags.scss'

function HostTags({ host }) {
  return (
    <div className="host">
      <h2 className="host__title">{host.name.replace(' ', '\n')}</h2>
      <img src={host.picture} className="host__img" />
    </div>
  )
}

HostTags.propTypes = {
  host: PropTypes.object,
}

export default HostTags
