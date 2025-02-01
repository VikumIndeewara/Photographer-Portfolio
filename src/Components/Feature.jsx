import React from 'react'
import { FaStar } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

const Feature = () => {
    const footItems = ['INTERACTIVE', 'INDEPENDENT', 'CREATIVE', 'PROFESSIONAL','INTERACTIVE', 'INDEPENDENT', 'CREATIVE', 'PROFESSIONAL']

    useGSAP(() => {

            gsap.fromTo(".item", { x: 0 }, { x: -window.innerWidth, duration: 10, repeat: -1, ease: "linear" });
    })
   
  return (
    <div className='bg-black py-1 overflow-hidden w-full'>
        <div className={`flex justify-around w-[200vw]`}>
            {footItems.map((item, index) => (
                <div key={index} className='item flex gap-32 text-brand1'>
                    <FaStar />
                    <span>{item}</span>
                    
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Feature