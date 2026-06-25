import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'

const HomePage = lazy(() => import('./pages/HomePage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const EventPage = lazy(() => import('./pages/EventPage'))
const ArtistsPage = lazy(() => import('./pages/ArtistsPage'))
const ArtistPage = lazy(() => import('./pages/ArtistPage'))
const BrochurePage = lazy(() => import('./pages/BrochurePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
import SmoothScroll from './components/SmoothScroll'
import { CustomCursor, NoiseOverlay } from './components/InteractiveElements'

const AdminPage = lazy(() => import('./pages/AdminPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <SmoothScroll>
      <>
        <CustomCursor />
        <NoiseOverlay />
        <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/artists/:id" element={<ArtistPage />} />
          <Route path="/brochure" element={<BrochurePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/artist" element={<Navigate to="/artists" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
        <Footer />
      </>
    </SmoothScroll>
  )
}

export default App
