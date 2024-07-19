import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
export const ServiceCard = ({data: {title, title2, icon, arrowBg, textBg, bg, color}}) => {
  return (
    <div className={`${bg} px-4 py-4 rounded-2xl flex justify-between items-center space-x-4 border border-b-4 border-black`}>
        <div>
            <h1 className={`${textBg} p-1 text-xl w-fit rounded-xl`}>{title}</h1>
            <h1 className={`${textBg} p-1 text-xl w-fit rounded-xl`}>{title2}</h1>
            <div className='flex items-center space-x-3 pt-20'>
                <FiArrowUpRight className={`${arrowBg} text-transparent text-3xl p-1 rounded-full`}/>
                <p className={`hidden md:block ${color}`}>Learn more</p>
            </div>
        </div>
        <div>
            <img src={icon} alt="" />
        </div>
    </div>
  )
}
