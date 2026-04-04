import React from "react";

const HeroCards = ({ heading, description, icon }) => {
  return (
    <div className="p-4 border bg-black/50 border-white rounded-4xl flex items-start gap-4 pb-10 justify-between">
        <span className="flex gap-3 items-center">

      <div className="text-white border border-white w-fit p-2 rounded-xl">
        {icon}
      </div>

        <h3 className="text-lg font-semibold text-white ">{heading}</h3>
        </span>

      
        <p className="text-7xl text-white">{description}</p>
      
    </div>
  );
};

export default HeroCards;
