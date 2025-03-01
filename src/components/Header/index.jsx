import { NavLink } from 'react-router'
import Logo from '../../assets/Logo.png'
import './header.scss'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Logo Kasa" />
      <nav className="header__nav">
        <NavLink className="header__nav--link" to="/">
          Acceuil
        </NavLink>
        <NavLink className="header__nav--link" to="/about">
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
