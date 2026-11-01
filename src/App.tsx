import { useEffect } from "react"
import { Routes, Route, useLocation, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DestinationsPage from "./pages/DestinationsPage"
import HotelsPage from "./pages/HotelsPage"
import GuidesPage from "./pages/GuidesPage"
import ItineraryPage from "./pages/ItineraryPage"
import ContactPage from "./pages/ContactPage"
import DashboardPage from "./pages/DashboardPage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/auth/LoginPage"
import SignupPage from "./pages/auth/SignupPage"

// Next.js scrolls to the top on every route change; React Router does not.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">This page could not be found.</p>
      <Link to="/" className="text-primary underline">Go home</Link>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
