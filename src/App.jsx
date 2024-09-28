import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home' 
import Navbar from "./components/Navbar" 
import { ThemeContext} from "./theme/theme"
import { useContext } from "react"

const App = () => { 
  const {theme} = useContext(ThemeContext) 

  return (
        <div className={theme === 'dark' ? 'bg-[#171616]  min-h-screen text-white' : 'text-black'}>
        <Router>
        <Navbar/>
        <div className="px-4 md:px-10 lg:px-24 ">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        </div>
      </Router>
        </div>
  )
}

export default App