import { journals } from "../data/journal"
import {Link} from 'react-router-dom'


function Journal() {
  return (
    <div className="mt-11 lg:mt-20">
       <div className="flex flex-col gap-y-4 lg:flex-row justify-between">
           <h1 className="font-bold text-3xl lg:text-6xl lg:w-1/2">Journal</h1> 
           <h1 className="text-lg lg:w-1/2 lg:text-xl">I love to write about my design and creation process whenever i get a chance. I post new content every week.</h1>
         </div> 
       
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-8 mt-16 lg:mt-20">
        {journals.map((journal) => (
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

export default Journal