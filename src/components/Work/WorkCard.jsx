import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export const WorkCard = ({index, data: { question, answer } }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <div
      onClick={() => setShowAccordion(!showAccordion)}
      className={showAccordion ? "bg-[#B9FF66] border p-4  rounded-xl w-full  my-3 cursor-pointer text-left  border-b-4 border-b-black" : "border p-4  rounded-xl w-full  my-3 cursor-pointer text-left border-b-4 border-b-black"}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">

        <p className="text-4xl">0{index + 1}</p>
        <h1 className="text-lg w-80 lg:w-full font-[500] lg:text-[20px]">{question}</h1>
        </div>
        {showAccordion ? <FiMinus className="transition-all duration-300 ease-in-out"/> : <FiPlus className="transition-all duration-300 ease-in-out" />}
      </div>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${showAccordion ? "grid-row-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <p className=" text-lg font-[400] text-gray-500 overflow-hidden ">
          {answer}
        </p>
      </div>
    </div>
  );
};