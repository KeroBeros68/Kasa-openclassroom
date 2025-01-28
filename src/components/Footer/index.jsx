import Logo from '../../assets/LogoFooter.png'
import '../../styles/footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} />
      <div className="footer__quote-line">
        <div>© 2020 Kasa. All</div>
        <div>rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
