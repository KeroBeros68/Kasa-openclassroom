import './home.scss'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import bannerImg from '../../assets/HomeBanner.png'

function Home() {
  return (
    <main className="home">
      <Banner bannerImg={bannerImg} />
      <Gallery />
    </main>
  )
}

export default Home
