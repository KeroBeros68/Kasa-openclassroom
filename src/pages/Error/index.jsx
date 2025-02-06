import { Link } from 'react-router'
import './error.scss'

function Error() {
  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <p className="error__quote">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link className="error__link" to={'/'}>
        Retourner sur la page d&apos;acceuil
      </Link>
    </main>
  )
}

export default Error
