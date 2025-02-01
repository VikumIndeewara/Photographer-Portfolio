import React from 'react'

const Footer = () => {
  return (
    <div className='w-dvw h-full text-white bg-black '>
        <hr className='opacity-30 p-4' />
        <div className='container mx-auto flex justify-between pb-4 lg:px-40 p-2 gap-4 '>
        <div className='Logo'>
                <h1 className='logo font-wosker text-white'>
                    KEVIN
                </h1>
        </div>
        <div className='flex gap-5 flex-col lg:flex-row'>
        <span className='text-white font-Poppins opacity-30 hover:opacity-100 cursor-pointer'>
            Terms & Conditions
        </span>
        <span className='text-white font-Poppins opacity-30 hover:opacity-100 cursor-pointer'>
            About Me
        </span>
        <span className='text-white font-Poppins opacity-30 hover:opacity-100 cursor-pointer'>
            @2024KEVIN | Alll Rights Reserved
        </span>
        </div>
        </div>
    </div>
  )
}

export default Footer