import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import EventPage from './pages/EventPage'
import ArtistPage from './pages/ArtistPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/artist" element={<ArtistPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
