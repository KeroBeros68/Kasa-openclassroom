import Logo from '../../assets/LogoFooter.png'
import './footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo Kasa" />
      <div className="footer__quote--line">
        © 2020 Kasa. All rights reserved
      </div>
    </footer>
  )
}

export default Footer
