import React from 'react'
import linkedin from '../../assets/Teams/Social icon.png'
const TeamCard = ({name, title, description, pic}) => {
  return (
    <div className='px-4 py-8 rounded-2xl  border border-b-8 border-black'>
        <div className='flex items-center space-x-4 justify-between'>
            <img src={pic} alt="" />
            <div>
                <h1>{name}</h1>
                <p>{title}</p>
            </div>
            <img src={linkedin} alt="" />
        </div>
        <hr className='border border-black my-4' />
        <p>{description}</p>
    </div>
  )
}

export default TeamCard