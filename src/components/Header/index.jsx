import { NavLink } from 'react-router'

function Header() {
  return (
    <div>
      <p>logo</p>
      <nav>
        <NavLink to="/"> Acceuil</NavLink>
        <NavLink to="/about"> A propos</NavLink>
      </nav>
    </div>
  )
}

export default Header
