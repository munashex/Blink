import { Link } from "react-router-dom"
import {useContext} from 'react' 
import { ThemeContext } from "../theme/theme"

const Navlinks = ({closeNav}) => {

    const {theme} = useContext(ThemeContext)

    const links = [ 
        {id: "01", name: "Home", url: 'home'}, {id: "02", name: "About", url: 'about'},  
        {id: "03", name: "Work", url: 'work'}, {id: "04", name: "Journal", url: "journal"}, 
        {id: "05", name: "Contact", url: "contact"}]

    return (
        <div className="w-full h-screen animate-fade-down mt-11">
        <div className="flex flex-col gap-y-6">
         {links.map((link) => (
            <div key={link.id} className={`border-b inline-flex gap-2 p-2 ${theme === 'dark' ? 'border-b-gray-700': ""}`}> 
             <h1 className="animate-fade-right animate-duration-300 animate-delay-300">{link.id}</h1>
             <Link to={`/${link.url}`} onClick={closeNav} className="text-4xl md:text-6xl lg:text-7xl animate-fade-right animate-duration-700 animate-delay-700">{link.name}</Link>
            </div>
         ))}
        </div>
        </div>
    )
}

export default Navlinks