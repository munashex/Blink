import { PiCircleHalfLight } from "react-icons/pi";
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { LiaBarsSolid } from "react-icons/lia";
import { ThemeContext } from "../theme/theme";
import { useContext, useState } from "react";
import Navlinks from "./Navlinks";

const Navbar = () => {

const {theme, toggleTheme} = useContext(ThemeContext)  
const [toggleNav, setToggleNav] = useState(false)

const handleToggleNav = () => setToggleNav(!toggleNav)


    return (
        <div className={`px-4 md:px-10 lg:px-24 py-3 lg:py-4 border-b ${theme === 'dark' ? 'border-b-gray-700' : 'border-gray-300'}`}> 

        <div className="flex flex-row justify-between">
        <button><PiCircleHalfLight size={45}/></button>  

        <div className="inline-flex items-center gap-x-4">
          <button onClick={toggleTheme}>{theme === 'light' ? <CiLight size={23}/> :
           <IoMoonOutline size={23}/>} 
           </button> 
           <button onClick={handleToggleNav}>{toggleNav ? <AiOutlineClose size={35}/> :<LiaBarsSolid size={35}/>}</button>
        </div> 

        </div> 
         {toggleNav ? <Navlinks closeNav={handleToggleNav}/> : null}
        </div>
    )
}

export default Navbar