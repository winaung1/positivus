import React from 'react'

export const Title = ({title, description}) => {
  return (
    <div className='md:flex md:items-center md:space-x-10 max-w-4xl shrink-0'>
        <h1 className='bg-[#B9FF66] text-4xl md:text-[40px] px-[7px] py-[10px] rounded-lg w-fit mx-auto shrink-0'>{title}</h1>
        <p className='py-10 text-center md:text-left text-[16px] md:text-[18px]'>{description}</p>
    </div>
  )
}
