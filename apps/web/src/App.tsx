import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";


const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./components/Navbar'));
const Loader = lazy(() => import('./components/Loader'));
const Footer = lazy(() => import('./components/Footer'));
const Signup = lazy(() => import('./components/Signup'));

function App() {
  // const navigate = useNavigate();

  // const handleClose = () => {
  //   navigate('/');
  // };

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
