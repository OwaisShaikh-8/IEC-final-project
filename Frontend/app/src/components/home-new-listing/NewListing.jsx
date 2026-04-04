import React from 'react'
import { MoveUpRight } from "lucide-react";

const NewListing = () => {
  return (
    <div className=" bg-light ">
        <div className='container py-30'>

        
        <div className='flex justify-between items-center'>
            <span className='flex flex-col gap-4'>
                <h1 className='text-5xl font-bold text-secondary'>New Listings</h1>
                <p className='text-xl text-secondary/50'>Latest live auction properties managed in the agent workspace.</p>
            </span>
           <button className='flex items-center gap-2 text-md font-medium px-4 py-2 border border-secondary hover:border-primary rounded-full hover:text-primary transition-all duration-300'>
            view all properties <MoveUpRight size={20}/>
           </button>
        </div>
        </div>
    </div>
  )
}

export default NewListing