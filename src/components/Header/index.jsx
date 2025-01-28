import { NavLink } from 'react-router'
import Logo from '../../assets/Logo.png'

function Header() {
  return (
    <div>
      <img src={Logo} />
      <nav>
        <NavLink to="/"> Acceuil</NavLink>
        <NavLink to="/about"> A propos</NavLink>
      </nav>
    </div>
  )
}

export default Header
