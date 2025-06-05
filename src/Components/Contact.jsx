import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


const Contact = () => {
  return (
    <div id="contact" className='w-dvw h-full bg-black pt-32'>
      <hr className='opacity-30 pb-20 '/>
        <div className='container mx-auto flex flex-col justify-center lg:max-w-6xl max-w-xl overflow-y-hidden h-full pb-20'>
            <h2 className='font-wosker text-7xl  pb-14 text-center text-white'>LET'S GET IN TOUCH</h2>
        
        <div className='flex flex-col md:flex-row gap-2  justify-between px-10'>
        <div className='font-Poppins text-white flex flex-col'>
            <span>Whatsapp:</span>
            <span className='opacity-50'>+90909090</span>
        </div>
        <div className='font-Poppins text-white flex flex-col'>
            <span>Email:</span>
            <span className='opacity-50'>KEVIN@mail.com</span>
        </div>
        <div className='flex gap-5 text-white md:justify-center items-center'>
            <FaFacebook className='size-6 hover:text-brand1 cursor-pointer'/>
            <RiInstagramFill className='size-6 hover:text-brand1 cursor-pointer'/>
            <FaSquareBehance className='size-6 hover:text-brand1 cursor-pointer'/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Contact