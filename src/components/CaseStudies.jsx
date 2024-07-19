import React from "react";
import { Title } from "./Title";
import { FiArrowUpRight } from "react-icons/fi";

export const CaseStudies = () => {
  return (
    <div className="pt-[60px] md:pt-[140px]">
      <Title
        title={"Case Studies"}
        description={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />
      <div className="overflow-x-scroll lg:overflow-visible">
        <div className="flex space-x-4 items-center lg:justify-between lg:bg-[#191A23] bg-transparent rounded-2xl">
          <div className="w-[286px]  bg-[#191A23] text-white p-4 rounded-2xl flex-shrink-0">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign that
              resulted in a 50% increase in website traffic and a 25% increase in
              sales.
            </p>
            <div className="text-[#B9FF66] flex items-center space-x-2 pt-4">
              <p>Learn more</p>
              <FiArrowUpRight className="text-2xl" />
            </div>
          </div>
          <hr className="h-40 border hidden md:block border-white"/>
          <div className="w-[286px]  bg-[#191A23] text-white p-4 rounded-2xl flex-shrink-0">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign that
              resulted in a 50% increase in website traffic and a 25% increase in
              sales.
            </p>
            <div className="text-[#B9FF66] flex items-center space-x-2 pt-4">
              <p>Learn more</p>
              <FiArrowUpRight className="text-2xl" />
            </div>
          </div>
          <hr className="h-40 border hidden md:block border-white"/>
          <div className="w-[286px] bg-[#191A23] text-white p-4 rounded-2xl flex-shrink-0">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign that
              resulted in a 50% increase in website traffic and a 25% increase in
              sales.
            </p>
            <div className="text-[#B9FF66] flex items-center space-x-2 pt-4">
              <p>Learn more</p>
              <FiArrowUpRight className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
