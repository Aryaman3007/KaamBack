import './App.css'
import { BrowserRouter as Router, Route, Navigate, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react"

const Home = lazy(() => import('./pages/Home'))

const Navbar = lazy(() => import('./components/Navbar'))
const Loader = lazy(() => import('./components/Loader'))
const Footer = lazy(() => import('./components/Footer'))

function App() {

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
