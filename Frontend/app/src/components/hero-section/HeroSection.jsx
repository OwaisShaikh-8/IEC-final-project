import React from "react";
import { MoveUpRight } from "lucide-react";
import { House } from "lucide-react";
import HeroCards from "./HeroCards";
const HeroSection = () => {
  return (
    <div className="w-full  hero pt-50 pb-30  bg-gray-100  ">
      <div className="container">
        <div className="w-[60%]">
        <h1 className="font-bold text-5xl text-primary leading-tight tracking-normal mb-2">
         Ready to find your perfect match? 
        </h1>
        <h2 className="font-bold text-3xl italic text-white leading-tight"> Connecting the right applicants to the right auction properties, effortlessly.</h2>
        <span className="flex gap-4 mt-10">
            <button className="px-4 py-2 bg-black/50 hover:bg-black text-md tracking-wide font-medium border border-white hover:border-primary text-white hover:text-primary rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300">Browse All Properties <MoveUpRight className="" /> </button>
            <button className="px-4 py-2 bg-black/50 hover:bg-black text-md tracking-wide font-medium border border-white hover:border-primary text-white hover:text-primary rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300">Submit Applicant Requirement <MoveUpRight /> </button>
        </span>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-20 mx-auto">
         <HeroCards heading="Active Properties" description="4" icon={<House size={24} />} />
         <HeroCards heading="Registered Sellers" description="5" icon={<MoveUpRight size={24} />} />
         <HeroCards heading="Registered Buyers" description="10" icon={<MoveUpRight size={24} />} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
