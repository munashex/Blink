import { useParams, useNavigate } from "react-router-dom"
import { journals } from '../data/journal'
import { IoMdArrowBack } from "react-icons/io";

function SingleJournal() {
  const { id } = useParams()
  const filteredJournal = journals.filter((journal) => journal.id === parseInt(id, 10))
  const navigate = useNavigate()

  return (
    <div className="mt-11 lg:mt-20 animate-fade-down"> 
     
     {/* go back to journal page */} 
     <button onClick={() => navigate('/journal')} className="inline-flex items-center text-lg font-bold gap-2"> 
      <IoMdArrowBack size={29}/> Back to blog 
      </button> 
   
      <div className="mt-11">
       {filteredJournal.map((journal) => (
        <div key={journal.id}> 
          <div className="space-y-6"> 
             <h1 className="text-2xl font-bold lg:text-4xl">{journal.description}</h1> 
             <img src={journal.image} alt={journal.description}
              className="w-full h-96 rounded-xl object-cover"/>
             <h1 className="text-lg lg:text-xl">{journal.descriptionBottom}</h1>
          </div>

          {/* headings  */}
          <div className="mt-8 space-y-9"> 
            <div className="space-y-3"> 
              <h1 className="text-2xl font-semibold lg:text-3xl">{journal.heading1}</h1>
               <h1 className="lg:text-lg">{journal.description1}</h1>
            </div>

            <div className="space-y-3"> 
              <h1 className="text-2xl font-semibold  lg:text-3xl">{journal.heading2}</h1>
               <h1 className="lg:text-lg">{journal.description2}</h1>
            </div>

            <div className="space-y-3"> 
              <h1 className="text-2xl font-semibold lg:text-3xl">{journal.heading3}</h1>
               <h1 className="lg:text-lg">{journal.description3}</h1>
            </div>
          </div>
        </div>
       ))}
      </div>
    </div>
  )
}

export default SingleJournal