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


function Home() {
  const { theme } = useContext(ThemeContext)
 

  return (
    <div className='mt-11'>
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
        <div>
          
        </div>

      </div>
    </div>
  )
}

export default Home