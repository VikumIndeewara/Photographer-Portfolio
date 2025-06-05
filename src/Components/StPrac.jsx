import React,{useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from "@gsap/react";
import video from '../assets/Images/vdo.mp4'

gsap.registerPlugin(ScrollTrigger);

const StPrac = () => {
    const vidRef = useRef();

    const tl = gsap.timeline();

    useGSAP(()=>{

        tl.fromTo('.vdo',{
            currentTime: 0,
        },{
            currentTime: 1,
            duration: 100,
            ease: "circ.inOut",
            
        })

        ScrollTrigger.create({
            animation: tl,
            trigger: ".cont",
            start: "top top",
            end: "+=300",
            scrub: true,
            pin: true,
            markers: true,
    })
});


  return (
    <div className='cont bg-white relative w-full h-full p-5'>
        <div className='start'>hooo</div>
        <div>
            <video src={`${video}`}
            ref={vidRef}
            muted
            className='vdo'
            ></video>
        </div>

    </div>
  )
}

export default StPrac