import React, { useEffect,useRef } from 'react';
import Image1 from "../assets/Images/work5.jpg";
import Image2 from "../assets/Images/work2.jpg";
import Image3 from "../assets/Images/work3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from '@gsap/react';
import { use } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
    const containerRef = useRef();
    let tl = gsap.timeline({});
  
    useGSAP(() => {

        tl.fromTo(".img",{
            y: 0,
        }, { 
            duration: 0.5,
            zIndex: 30,
            opacity: 1,
            y: 0,
            // y: -window.innerHeight/2,
            ease: "power4.in",
    });
    tl.to(".img",{scale:1.02 , duration: 10});
        tl.fromTo(".img2",{
            y: window.innerHeight/2,
        },  { 
            duration: 10,
            zIndex: 40,
            opacity: 1,
            y:0,
            // y: window.innerHeight/2,
            ease: "power4.in",
        });
        tl.to(".img2",{scale:1.02 , duration: 10});
        tl.fromTo(".img3",{
            y: window.innerHeight/2,
        },  { 
            duration: 10,
            zIndex: 50,
            opacity: 1,
            y:0,
            // y: window.innerHeight,
            ease: "power4.in",
        });
        tl.to(".img3",{scale:1.02 , duration: 10});

        ScrollTrigger.create({
            animation: tl,
            trigger: ".scroll-container",
            start: "top top",
            end: "+=500 30%",  
            scrub: 1,
            pin: true,
            markers: true,
        });
    });


    console.log(window.innerHeight/2);


    return (
        <div ref={containerRef} className="scroll-container relative h-[100vh] bg-[#d7f2fd]">
            <img className="img absolute z-20 opacity-0 w-full h-[100vh] object-cover p-10" src={Image1} alt="Second Image" />
            <img className={`img2 absolute z-10 opacity-0 w-full h-[100vh] object-cover p-10`} src={Image2} alt="Second Image" />
            <img className="img3 absolute z-0  opacity-0 w-full h-[100vh] object-cover p-10" src={Image3} alt="Second Image" />
            <div className='end bg-orange-500'></div>
        </div>
    );
};

export default Second;
