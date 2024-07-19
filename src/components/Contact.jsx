import React from "react";
import { Title } from "./Title";
import contact from "../assets/Contact/Illustration (5).png";
export const Contact = () => {
  return (
    <div className="pt-[60px] md:pt-[140px]">
      <Title
        title={"Contact us"}
        description={
          "Connect with Us: Let's Discuss Your Digital Marketing Needs"
        }
      />
      <div className="relative bg-[#F3F3F3] p-4 rounded-2xl flex justify-between ">
        <div className="w-full">
          <div className="flex items-center space-x-6 ">
            <div>
              <input className="mr-2" type="radio" name="hi" id="hi" />
              <label htmlFor="hi">Say Hi</label>
            </div>
            <div>
              <input className="mr-2" type="radio" name="quote" id="quote" />
              <label htmlFor="quote">Get a Quote</label>
            </div>
          </div>
          <div className="pt-4">
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="border w-full mt-1 border-black bg-white px-4 py-2 rounded-xl"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="py-4">
            <label htmlFor="email">Email*</label>
            <br />
            <input
              className="border w-full mt-1 border-black bg-white px-4 py-2 rounded-xl"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="message">Message*</label>
            <br />
            <textarea
              className="border w-full mt-1 border-black bg-white px-4 py-2 rounded-xl"
              type="text"
              placeholder="Email"
            />
          </div>
          <button className="px-5 py-3 mt-8 w-full md:w-fit md:float-right  rounded-xl bg-[#191A23] text-gray-300">
            Send Message
          </button>
        </div>
      
      </div>
    </div>
  );
};
