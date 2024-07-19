import React from "react";
import callaction from "../assets/CallAction/callaction.png";
export const CallAction = () => {
  return (
    <div className="mt-[60px] md:mt-[140px] bg-[#F3F3F3] p-4 rounded-2xl flex items-center justify-between space-x-10">
      <div>
        <h1 className="text-[30px]">Let's make things happen</h1>
        <p className="py-4 lg:w-3/4">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="px-5 py-3 rounded-xl bg-[#191A23] text-gray-300">
          Get your free proposal
        </button>
      </div>
      <div className="hidden md:block">
        <img src={callaction} alt="" />
      </div>
    </div>
  );
};
