import React from 'react'
import { WorkCard } from './WorkCard';
import { Title } from '../Title';

export const Work = () => {
    const works = [
        {
          question: "What is Lorem Ipsum?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          question: "Why do we use it?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          question: "Where does it come from?",
          answer:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          question:
            "What is the standard chunk of Lorem Ipsum used since the 1500s?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          question: "Why do we use it?",
          answer:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
      ];
    
    
  return (
    <div className="pt-[60px] md:pt-[140px]">
      <Title
        title={"Our Working Process"}
        description={
          "Step-by-Step Guide to Achieving Your Business Goals"
        }
      />
  
    <div className="lg:pt-6 lg:pb-3">
      {works.map((work, index) => (
        <WorkCard index={index} data={work} />
      ))}
    </div>
  
  </div>
  )
}
