import { works } from "../data/works"
import { ThemeContext } from "../theme/theme"
import { useContext} from "react"


const Work = () => {
  const { theme } = useContext(ThemeContext)

    return (
        <div className="mt-11 lg:mt-20">

         <div className="flex flex-col gap-y-4 lg:flex-row justify-between">
           <h1 className="font-bold text-3xl lg:text-6xl lg:w-1/2">Case Studies</h1> 
           <h1 className="text-lg lg:w-1/2 lg:text-xl">I have had the privilege of working with some of the most well-known companies in the world. Here are some of the works I'm most proud of.</h1>
         </div> 

         <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-7">
         {works.map((work) => (
          <div key={work.name} className={theme === 'dark' ? 'p-3 bg-[#202021] rounded-xl lg:p-5' : 'p-3 lg:p-5 bg-gray-100 rounded-xl'}> 
            <img src={work.image} alt={work.name} className="scale-100 lg:hover:scale-125 transition delay-150 duration-300 ease-in-out"/> 
            <div className="space-y-2.5"> 
              <h1 className="text-xl md:text-2xl font-bold">{work.name}</h1> 
              <div className="inline-flex items-center gap-x-2"> 
                <button className={`font-semibold text-sm ${theme === 'light' ? 'border border-black py-1 rounded-full px-2 hover:text-white hover:bg-black' : 'border border-white py-1 rounded-full px-2 hover:text-black hover:bg-white'}`}>UI.UX</button> 
                <button className={`font-semibold text-sm ${theme === 'light' ? 'border border-black py-1 rounded-full px-2 hover:text-white hover:bg-black' : 'border border-white py-1 rounded-full px-2 hover:text-black hover:bg-white'}`}>Branding</button> 
                <button className={`font-semibold text-sm ${theme === 'light' ? 'border border-black py-1 rounded-full px-2 hover:text-white hover:bg-black' : 'border border-white py-1 rounded-full px-2 hover:text-black hover:bg-white'}`}>Motion</button>
              </div>
            </div>
          </div>
         ))}
        </div>
        </div>
    )
}

export default Work