import React from 'react'
import { useState } from 'react'
import { Menu, X,Lock } from 'lucide-react'

const Navbar = ({setShowModal}) => {
      // const [showModal, setShowModal] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
  return (
     <nav className="w-full bg-white/60 shadow-md fixed top-0 left-0 z-50 text-secondary ">
      <div className="container  px-4 py-3 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <h1 className="text-xl font-bold">Brand</h1>

          {/* Links (Desktop) */}
          <div className="hidden Capitalize font-medium text-md md:flex gap-6 ">
            <a href="#" className=" hover:text-primary transition-all duration-300">Home</a>
            <a href="#" className=" hover:text-primary transition-all duration-300">Applicant Request</a>
          </div>
        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex gap-4">
          <button onClick={()=> setShowModal(true)} className="px-3 py-2 rounded-4xl border flex items-center gap-2 font-medium hover:text-primary transition-all duration-300"> <Lock  /> Login/Signup</button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col gap-4">
          <a href="#" className="hover:text-primary text-center ">Home</a>
          <a href="#" className="hover:text-primary text-center">Applicant Request</a>

          <button onClick={()=> setShowModal(true)} className="px-2 py-1 rounded-4xl text-sm flex items-center justify-center font-medium text-center gap-2 border hover:text-primary"> <Lock /> Login/Signup</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar