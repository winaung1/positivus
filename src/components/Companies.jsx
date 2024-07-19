import React from 'react'
import amazon from '../assets/amazon.png'
import dribble from '../assets/dribble.png'
import hubspot from '../assets/hubspot.png'
import notion from '../assets/notion.png'
import netflix from '../assets/netflix.png'
import zoom from '../assets/zoom.png'
export const Companies = () => {
  return (
    <div className='flex flex-wrap items-center space-x-8 w-full justify-center gap-4 px-4'>
        <img src={amazon} alt="" />
        <img src={dribble} alt="" />
        <img src={hubspot} alt="" />
        <img src={notion} alt="" />
        <img src={netflix} alt="" />
        <img src={zoom} alt="" />
    </div>
  )
}
