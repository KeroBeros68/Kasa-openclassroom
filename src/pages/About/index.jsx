import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import bannerImg from '../../assets/AboutBanner.png'
import './about.scss'

const about = [
  'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
  `La sécurité est la priorrité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères dde sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les stanards sont bien respectés. Nous organisans également des ateliers sur la sécurité domestique pour nos hôtes.`,
]

function About() {
  return (
    <main className="about">
      <Banner bannerImg={bannerImg} />
      <div className="about__collapse">
        <Collapse title="Fiabilité" text={about[0]} />
        <Collapse title="Respect" text={about[1]} />
        <Collapse title="Service" text={about[2]} />
        <Collapse title="Sécurité" text={about[3]} />
      </div>
    </main>
  )
}

export default About
