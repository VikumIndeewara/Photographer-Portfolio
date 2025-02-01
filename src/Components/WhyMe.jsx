import React from "react";
import img from "../assets/Images/portrait.png";
import img2 from "../assets/Images/Rectangle.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const WhyMe = () => {
  // const tl=gsap.timeline({});

  // useGSAP(()=>{
  //   tl.fromTo(".header",{
  //     opacity:0,
  //     y:50,
  //   },{
  //     opacity:1,
  //     y:0,
  //     duration:3,
  //   } )
  //   tl.fromTo(".textCont",{
  //     opacity:0,
  //     y:50,
  //   },{
  //     opacity:1,
  //     y:0,
  //     duration:2,
  //   })
  //   tl.fromTo(".btn2",{
  //     opacity:0,
  //     scale:0.5,
  //     duration:2,
  //   },{
  //     opacity:1,
  //     scale:1,
  //     duration:3
  //   })
  //   tl.fromTo(".vector",{
  //     y:50,
  //     opacity:0,
  //   },{
  //     y:0,
  //     opacity:1,
  //     duration:3,
  //   })
  //   tl.fromTo(".image",{
  //     scale:0.5,
  //     opacity:0,
  //   },{
  //     scale:1,
  //     opacity:1,
  //     duration:3,
  //   })

  //   ScrollTrigger.create({
  //     animation:tl,
  //     trigger: ".scroll-container",
  //     start: "top 80%",
  //     end: "+=1800 bottom",
  //     scrub: 2,
  //     markers: true,

  //   })

  // })
  return (
    <div id="about" className="scroll-container w-dvw h-full relative bg-black">
      <div className="container mx-auto pt-20 py-10 lg:px-20 flex lg:flex-row flex-col justify-between lg:max-w-6xl max-w-xl ">
        <div className="flex flex-col justify-start lg:items-start items-center text-justify lg:w-1/2 w-full">
          <h2 className="header text-white font-wosker text-7xl m-5">WHY ME</h2>
          <div className="flex flex-col align-baseline justify-center items-center lg:w-1/2 w-full my-10 overflow-hidden lg:hidden">
          <img src={`${img}`} className='vector w-full h-full object-cover relative z-10 scale-125 -top-16 lg:-top-20' />
          <img
            src={`${img2}`}
            className="image h-[350px] w-[350px] absolute z-0 size-1/2  lg:translate-y-4"
          />
        </div>
          <p className="textCont text-white font-Poppins m-5">
            we are passionate storytellers who capture moments that matter. With
            a keen eye for detail and a deep appreciation for the art of
            photography, we specialize in [mention your specialties, e.g.,
            portrait, landscape, event] photography. Every click of the shutter
            is an opportunity to freeze time and create memories that last a
            lifetime.Driven by creativity and a commitment to excellence, we
            approach every project with enthusiasm and dedication. Whether it's
            a wedding, a corporate event, or a personal photoshoot, we strive to
            exceed expectations and deliver images that resonate with our
            clients.
          </p>
          <div className="clip-button bg-[#e7dcba] relative m-10  hover:scale-110">
          <button className="btn2 p-4 m-1  clip-button bg-black ">
              See My Work
          </button>
          </div>

        </div>
        <div className="lg:flex flex-col align-baseline justify-center items-center lg:w-1/2 w-full my-20 overflow-hidden hidden ">
          <img src={`${img}`} className='w-full h-full object-cover relative z-10 scale-125 -top-16 lg:-top-20' />
          <img
            src={`${img2}`}
            className="h-[350px] w-[350px] absolute z-0 size-1/2  lg:translate-y-4"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
