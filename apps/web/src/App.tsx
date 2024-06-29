import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AuthProvider } from './context/AuthContext';

const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./components/Navbar'));
const Loader = lazy(() => import('./components/Loader'));
const Footer = lazy(() => import('./components/Footer'));
const Signup = lazy(() => import('./components/Signup'));
const Login = lazy(() => import('./components/Login'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;
