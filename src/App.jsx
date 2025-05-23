import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

//Páginas e Componentes
import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Contact from '../src/Pages/Contact'
import Projects from '../src/Pages/Projects'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';


// Utilidades
import ScrollToTop from './utils/ScrollTop'
import { AppContext } from './contexts/AppContext';

function App() {
  const appContext = useContext(AppContext)

  if(appContext.loading){
    return <LoadingSpinner/>
  }
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
