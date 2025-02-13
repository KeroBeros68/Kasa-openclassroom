import './collapse.scss'
import toggleArrow from '../../assets/toggleArrow.svg'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Collapse({ title, text }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse__headder">
        <h2 className="collapse__header__title">{title}</h2>
        <img
          src={toggleArrow}
          className={'collapse__headder__btn ' + (open && 'open')}
          onClick={() => setOpen((prev) => !prev)}
          alt="toggle collapse"
          aria-roledescription="button"
        />
      </div>
      <div
        className={'collapse__content ' + (open && 'open')}
        aria-hidden={open ? 'false' : 'true'}
      >
        {Array.isArray(text) ? (
          <ul>
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}
export default Collapse
