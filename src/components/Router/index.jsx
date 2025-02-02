import { Routes, Route } from 'react-router'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Lodging from '../../pages/Lodging'
import Error from '../../pages/Error'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lodging/:id" element={<Lodging />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter
