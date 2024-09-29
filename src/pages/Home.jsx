import { ThemeContext } from "../theme/theme"
import { useContext, useState } from "react"
import image1 from '../images/home1.avif' 
import video2 from '../images/home2.mp4' 
import image3 from '../images/home3.avif' 
import image4 from '../images/home4.avif' 
import image5 from '../images/home5.avif' 
import video6 from '../images/home6.mp4'
import VideoPlayer from "../components/VideoPlayer"
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md"
import { services } from "../data/services"
import { FaPlus, FaMinus} from "react-icons/fa6";
import { works } from "../data/works"
import { IoMdArrowForward } from "react-icons/io";
import { journals } from "../data/journal"
import {Link} from 'react-router-dom'

function Home() {
  const { theme } = useContext(ThemeContext)
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null)
    } else {
      setOpenAccordion(index)
    }
  }

  return (
    <div className='mt-11 lg:my-20 animate-fade-down'>
      {/* what i do  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-2">  
        <h1 className="text-4xl font-bold lg:text-7xl">Carl Sagan. Visual designer</h1> 
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-semibold lg:text-3xl">I create art that is both aesthetically pleasing and emotionally resonant. I also design user interfaces that are intuitive and user-friendly.</h1>
          <div className="flex flex-row gap-x-2">
            <a href="https://dribbble.com/clonifylibrary" className={`font-semibold text-sm ${theme === 'light' ? 'border border-black py-1 rounded-full px-2 hover:text-white hover:bg-black' : 'border border-white py-1 rounded-full px-2 hover:text-black hover:bg-white'}`}>Dribble</a> 
            <a href="https://www.behance.net/nayzakui" className={`font-semibold text-sm ${theme === 'light' ? 'border border-black py-1 rounded-full px-2 hover:text-white hover:bg-black' : 'border border-white py-1 rounded-full px-2 hover:text-black hover:bg-white'}`}>Behance</a> 
            <a href="https://www.figma.com/@clonify" className={`font-semibold text-sm ${theme === 'light' ? 'border border-black py-1 rounded-full px-2 hover:text-white hover:bg-black' : 'border border-white py-1 rounded-full px-2 hover:text-black hover:bg-white'}`}>Figma</a>
          </div>
        </div>
      </div>

      {/* artworks section */} 
      <div className="mt-11 lg:mt-20 space-y-3 lg:space-y-4">
        <img src={image1} alt="blink-image1" className="h-20 w-full md:h-24 lg:h-32 rounded-2xl"/>
         
        <div className="inline-flex gap-x-4 lg:gap-x-4 w-full overflow-hidden">
          <VideoPlayer src={video2}/> 
          <img src={image3} alt="blink-image2" className="h-20 w-full md:h-24 lg:h-32 rounded-2xl"/>
        </div> 
       
        <img src={image4} alt="blink-image-3" className="h-20 w-full md:h-24 lg:h-32 rounded-2xl"/>
          
        <div className="inline-flex gap-x-2 lg:gap-x-4 w-full overflow-hidden">
          <img src={image5} alt="blink-image-4" className="h-20 w-1/2  md:h-24 lg:h-32 rounded-2xl"/>
          <VideoPlayer src={video6} className="w-1/2"/>
        </div>
      </div> 

      {/* services  */} 
      <div className="mt-11 lg:mt-20">  
        <h1 className="inline-flex items-center gap-x-3 mb-6">
          <MdOutlineSubdirectoryArrowRight size={25}/>
          <span className="text-xl">SERVICES</span>
        </h1>
        
        {/* services accordion */}
        <div className={`mt-7 space-y-2 ${theme === 'dark' ? "divide-y divide-gray-700" : "divide-y divide-y-300"}`}>
          {services.map((service, index) => (
            <div key={service.name} onClick={() => toggleAccordion(index)} className="cursor-pointer"> 
              <div className="flex flex-row justify-between py-3"> 
                <div className="inline-flex items-center gap-x-2.5"> 
                  <span className="hover:rotate-180 cursor-pointer">{service.icon}</span>
                  <h1 className="text-xl font-semibold">{service.name}</h1>
                </div> 
                <button onClick={() => toggleAccordion(index)}>
                  {openAccordion === index ? <FaMinus size={25}/> : <FaPlus size={25}/>}
                </button>
              </div>
              {openAccordion === index && <h1 className="lg:text-lg animate-fade-down mb-4">{service.description}</h1>}
            </div>
          ))}
        </div>
      </div>

      {/* works */} 
      <div className="mt-11 lg:mt-20"> 
      <h1 className="inline-flex items-center gap-x-3 mb-6">
          <MdOutlineSubdirectoryArrowRight size={25}/>
          <span className="text-xl">WORKS</span>
        </h1>

        <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-7">
         {works.slice(0, 6).map((work) => (
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

        <div className="mt-11 lg:mt-16 flex justify-center">
          <Link to="work" className={`flex flex-row w-full lg:w-[70%] text-xl justify-center items-center gap-x-3 ${theme === 'light' ?  "border py-2.5 px-6 rounded-full border-black font-bold hover:bg-black hover:text-white" : "border py-2.5 px-6 rounded-full border-white font-bold hover:bg-white hover:text-black"}`}>
            All case Studies <span className="transition delay-75 duration-100 hover:rotate-180">
              <IoMdArrowForward size={24}/>
            </span>
          </Link>
        </div>
      </div>


      {/* journals  */} 
      <div className="mt-11 lg:mt-20">
      <h1 className="inline-flex items-center gap-x-3 mb-6">
          <MdOutlineSubdirectoryArrowRight size={25}/>
          <span className="text-xl">JOURNAL</span>
        </h1>
      </div> 
        
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-8">
        {journals.slice(0, 3).map((journal) => (
          <Link to={`/journal/${journal.id}`} key={journal.id} className="space-y-2"> 
          <img src={journal.image} className="rounded-xl h-80 w-full object-cover"/> 
          <div className="space-y-1.5"> 
            <h1 className="text-sm">{journal.date}</h1>
            <h1 className="text-lg md:text-xl font-bold">{journal.description}</h1>
          </div>
          </Link>
        ))}
      </div> 

    </div>
  )
}

export default Home