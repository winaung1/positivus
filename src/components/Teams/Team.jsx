import React from 'react'
import { Title } from '../Title'
import TeamCard from './TeamCard'
import team1 from '../../assets/Teams/Picture.png'
import team2 from '../../assets/Teams/Picture (2).png'
import team3 from '../../assets/Teams/Picture (3).png'
import team4 from '../../assets/Teams/Picture (4).png'
import team5 from '../../assets/Teams/Picture (5).png'
import team6 from '../../assets/Teams/Picture (6).png'
const Team = () => {
  return (
    <div className="pt-[60px] md:pt-[140px]">
    <Title
      title={"Team"}
      description={
        "Meet the skilled and experienced team behind our successful digital marketing strategies"
      }
    />
    <div  className='grid md:grid-cols-2 gap-[30px] md:gap-10'>
        <TeamCard pic={team1} name={'John Smith'} title={'CEO and Founder'} description={'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'}/>
        <TeamCard pic={team2} name={'Sam Smith'} title={'CEO and Founder'} description={'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'}/>
        <TeamCard pic={team3} name={'Jane Smith'} title={'CEO and Founder'} description={'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'}/>
        <TeamCard pic={team4} name={'John Smith'} title={'CEO and Founder'} description={'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'}/>
        <TeamCard pic={team5} name={'John Smith'} title={'CEO and Founder'} description={'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'}/>
        <TeamCard pic={team6} name={'John Smith'} title={'CEO and Founder'} description={'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'}/>
    </div>
    <button className="px-5 py-3 mt-8 w-full md:w-fit md:float-right  rounded-xl bg-[#191A23] text-gray-300">
          See all team
        </button>
    </div>
  )
}

export default Team