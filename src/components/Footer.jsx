import React from "react";
import FooterLogo from "../assets/FooterLogo.png";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="bg-[#191A23] text-gray-400 p-4 py-10 mt-[60px] md:mt-[140px] max-w-7xl mx-auto lg:rounded-t-2xl">
      <div className="md:flex justify-between items-center md:pb-8">
        <div className="w-fit mx-auto md:mx-0">
          <img className="" src={FooterLogo} alt="" />
        </div>
        <ul className="text-center py-4 leading-10 md:text-left md:flex items-center space-x-6">
          <li>About Us</li>
          <li>Services</li>
          <li>Use Cases</li>
          <li>Pricing</li>
        </ul>
        <div className="hidden md:flex items-center space-x-4 justify-center">
          <FaFacebookF className="bg-white text-black p-1 text-2xl rounded-full" />
          <FaLinkedin className="bg-white text-black p-1 text-2xl rounded-full" />
          <FaTwitter className="bg-white text-black p-1 text-2xl rounded-full" />
        </div>
      </div>
      <div className="md:flex md:space-x-4 justify-between">
        <div className="text-center md:text-left">
          <p className="bg-[#B9FF66] text-black w-fit px-1 rounded-lg mx-auto md:mx-0">
            Contact us:
          </p>
          <div className="leading-8 py-4">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
        </div>
        <div className="bg-[#292A32] md:flex items-center md:space-x-4  px-4 py-6 rounded-xl">
          <input
            type="text"
            placeholder="Email"
            className="px-4 py-3 rounded-2xl bg-transparent border w-full"
          />
          <button className="px-5 py-3 mt-3 md:mt-0 w-full md:w-fit  rounded-xl bg-[#B9FF66] shrink-0 text-black">
            Subscribe to news
          </button>
        </div>
      </div>

      <div className="flex md:hidden items-center space-x-4 justify-center my-8">
        <FaFacebookF className="bg-white text-black p-1 text-2xl rounded-full" />
        <FaLinkedin className="bg-white text-black p-1 text-2xl rounded-full" />
        <FaTwitter className="bg-white text-black p-1 text-2xl rounded-full" />
      </div>

      <hr className="mt-8" />
      <div className="md:flex  md:space-x-4 text-center pt-8">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};
