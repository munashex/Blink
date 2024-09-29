import React, { useContext } from 'react'
import aboutImage from '../images/about.avif'
import { ThemeContext } from '../theme/theme'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md"
import { experience } from '../data/experience'
import { whyChooseMe } from '../data/whychooseme'

function About() {

    const {theme} = useContext(ThemeContext)
  return (
    <div className="mt-11 lg:mt-20 animate-fade-down">
      
      {/* about me info */}
     <div className="space-y-6">
       <h1 className="text-3xl font-semibold lg:text-7xl">I love design more than my vintage action figures</h1>
        <img src={aboutImage} alt="aboutimage"  
        className="rounded-xl h-96 w-full object-cover"/>
     </div>

       <div className={theme === 'dark' ? 'p-3 lg:p-20 rounded-xl mt-10 bg-[#202021]' : 'p-3 mt-10 lg:p-20 rounded-xl bg-gray-100'}>
        <h1 className="text-lg lg:text-2xl font-semibold">I'm passionate about my work because I believe that good design can make a real difference in the world — It can help businesses attract new customers, build stronger relationships, and create a more positive brand image. I love the challenge of taking someone's vision and turning it into a reality.</h1>
       </div>

        
        {/* experience */}
        <div className="mt-11 lg:mt-20 flex flex-col gap-y-4 lg:flex-row lg:items-start justify-between">
        <h1 className="inline-flex items-center gap-x-3 mb-6 lg:w-1/2">
          <MdOutlineSubdirectoryArrowRight size={25}/>
          <span className="text-xl">Experience</span>
        </h1>

        <div className={`space-y-2 lg:w-1/2 divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-300'}`}>
         {experience.map((company) => (
          <div key={company.year} className="flex flex-row justify-between py-2"> 
          <h1 className="md:text-lg">{company.year}</h1> 
          <h1 className="md:text-lg">{company.company}</h1>
          </div>
         ))}
        </div> 

      </div> 
       

        {/* why you choose me  */}
      <div className="mt-20 lg:mt-28 flex flex-col gap-y-4 lg:flex-row lg:items-start justify-between">
        <h1 className="inline-flex items-center gap-x-3 mb-6 lg:w-1/2">
          <MdOutlineSubdirectoryArrowRight size={25}/>
          <span className="text-xl">Why choose me</span>
        </h1>
         
        <div className="lg:w-1/2">
          <h1 className="text-xl font-bold lg:text-3xl">I’m dedicated and love making a change through design</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 mt-9">
           {whyChooseMe.map((info) => (
            <div key={info.name} className="space-y-1"> 
             <div className="inline-flex items-center gap-x-3"> 
              <span>{info.icon}</span> 
              <h1 className="text-lg font-bold">{info.name}</h1>
             </div>
             <h1 className="md:text-lg">{info.description}</h1>
            </div>
           ))}
          </div> 

        </div>
      </div>

    </div>
  )
}

export default About