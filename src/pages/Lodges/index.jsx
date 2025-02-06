import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import Tags from '../../components/Tags'
import './lodges.scss'
import { Navigate, useLocation } from 'react-router'

function Lodges() {
  const location = useLocation()
  const lodge = location.state?.lodgeData
  let equipments = lodge.equipments

  if (!lodge) {
    return <Navigate to={'/error'} />
  }
  return (
    <main className="lodge">
      <Carrousel photos={lodge.pictures} />
      <div className="lodge__container">
        <div>
          <h1 className="lodge__title lodge__title--first">{lodge.title}</h1>
          <h2 className="lodge__title lodge__title--second">
            {lodge.location}
          </h2>
          <div className="lodge__tag">
            {lodge.tags.map((tag) => (
              <Tags key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div>nom photo etoile</div>
      </div>
      <div className="lodge__collapse">
        <Collapse title="Description" text={lodge.description} />
        <Collapse title="Equipements" text="ok" />
      </div>
    </main>
  )
}

export default Lodges
