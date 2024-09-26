import { PiCircleHalfLight } from "react-icons/pi";
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { HiOutlineBars2 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { LiaBarsSolid } from "react-icons/lia";
import { ThemeContext } from "../theme/theme";
import { useContext } from "react";

const Navbar = () => {

const {theme, toggleTheme} = useContext(ThemeContext) 

    return (
        <div className="px-4 md:px-10 lg:px-24 py-3 border-b"> 

        <div className="flex flex-row justify-between">
        <button><PiCircleHalfLight size={45}/></button>  

        <div className="inline-flex items-center gap-x-4">
          <button onClick={toggleTheme}>{theme === 'light' ? <CiLight size={23}/> :
           <IoMoonOutline size={23}/>} 
           </button> 
           <button><LiaBarsSolid size={35}/></button>
        </div> 

        </div> 

        </div>
    )
}

export default Navbar