import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import Lodges from '../pages/Lodges'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lodges/:id" element={<Lodges />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter
