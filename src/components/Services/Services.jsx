import React from 'react'
import { Title } from '../Title'
import search from '../../assets/Services/Illustration (1).png'
import click from '../../assets/Services/tokyo-selecting-a-value-in-the-browser-window 1.png'
import marketing from '../../assets/Services/Illustration (2).png'
import email from '../../assets/Services/tokyo-sending-messages-from-one-place-to-another 1.png'
import content from '../../assets/Services/Illustration (3).png'
import tracking from '../../assets/Services/Illustration (4).png'
import { ServiceCard } from './ServiceCard'
export const Services = () => {
    const services = [
        {id: 1, title: 'Search engine', title2: 'optimization', bg: 'bg-[#F3F3F3]', icon: search, arrowBg: 'bg-[#191A23] text-[#B9FF66]', textBg: 'bg-[#B9FF66]'},
        {id: 2, title: 'Pay-per-click', title2: 'advertising', bg: 'bg-[#B9FF66]', icon: click, arrowBg: 'bg-[#191A23] text-[#B9FF66]', textBg: 'bg-[#ffff]'},
        {id: 3, title: 'Social Media', title2: 'Marketing', bg: 'bg-[#191A23]', icon: marketing, arrowBg: 'bg-[#ffff] text-[#000]', textBg: 'bg-[#ffff]', color: 'text-gray-300'},
        {id: 4, title: 'Email', title2: 'Marketing', bg: 'bg-[#F3F3F3]', icon: email, arrowBg: 'bg-[#191A23] text-[#B9FF66]', textBg: 'bg-[#B9FF66]'},
        {id: 5, title: 'Content', title2: 'Creation', bg: 'bg-[#B9FF66]', icon: content, arrowBg: 'bg-[#191A23] text-[#B9FF66]', textBg: 'bg-[#ffff]'},
        {id: 6, title: 'Analytics and', title2: 'Tracking', bg: 'bg-[#191A23]', icon: tracking, arrowBg: 'bg-[#ffff] text-[#000]', textBg: 'bg-[#b9ff66]', color: 'text-gray-300'},
    ]
  return (
    <div className='pt-[60px] md:pt-[140px]'>
        <Title title={'Services'} description={'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'}/>
        <div className='grid md:grid-cols-2 gap-[30px] md:gap-10'>
            {services.map(service => (
                <ServiceCard data={service}/>
            ))}
        </div>
    </div>
  )
}
