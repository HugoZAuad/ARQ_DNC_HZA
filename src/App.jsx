import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/* PAGES */
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';

//Utils
import ScrollToTop from './Utils/ScrollTop'
import { AppContext } from './Components/Contexts/AppContext'


function App() {
  const appContext = useContext(AppContext)

  if(appContext.loading) {
    return <LoadingSpinner />
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
