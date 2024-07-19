import React, { useEffect, useState, Suspense, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import illustration from "../assets/Illustration.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <div className=" px-4 md:flex justify-between md:space-x-4  items-center py-10 md:py-[70px] ">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        className=""
      >
        <h1 className="lg:text-7xl font-[700] text-5xl  md:text-6xl md:w-full mx-auto">
          Navigating the digital landscape for success
        </h1>
        <div className="w-full mt-4 md:hidden">
        <img src={illustration} alt="" />
      </div>
        <p className="text-sm text-[#666666] py-4  md:w-3/4">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="bg-[#191A23] w-full md:w-fit rounded-xl  px-5 py-3 text-white">
          Book a consultation
        </button>
      </div>
      <div className="w-full hidden md:block">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};

export default Banner;
