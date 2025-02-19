import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import img from "../assets/Images/portrait.png";
import img2 from "../assets/Images/Rectangle.png";
import { HashLink as Link } from 'react-router-hash-link';


gsap.registerPlugin(ScrollTrigger);

const WhyMe = () => {
  const tl = gsap.timeline({});

  React.useEffect(() => {
    tl.fromTo(
      ".header",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
      }
    )
      .fromTo(
        ".vector",
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        ".image",
        {
          scale: 0.5,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        ".textCont",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
        }
      )
      .fromTo(
        ".btn2",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
        }
      );

    ScrollTrigger.create({
      animation: tl,
      trigger: ".scroll-container",
      start: "top 80%",
      end: "+=600 bottom",
      scrub: 2,
    });
  }, []);

  return (
    <div id="about" className="scroll-container w-full h-full relative bg-black">
      <div className="container mx-auto pt-20 py-10 lg:px-20 flex lg:flex-row flex-col justify-between lg:max-w-6xl max-w-xl">
        <div className="flex flex-col justify-start lg:items-start items-center text-justify lg:w-1/2 w-full">
          <h2 className="header text-white font-wosker text-7xl m-5">WHY ME</h2>
          <div className="flex flex-col align-baseline justify-center items-center lg:w-1/2 w-full my-10 overflow-hidden lg:hidden">
            <img src={img} alt="Portrait" className="w-full h-full object-cover relative z-10 scale-125" />
            <img
              src={img2}
              alt="Rectangle"
              className="h-[300px] w-[300px] absolute z-0 size-1/2 lg:translate-y-4"
            />
          </div>
          <p className="textCont text-white font-Poppins m-5">
            We are passionate storytellers who capture moments that matter. With a keen eye for detail and a deep appreciation for the art of photography, we specialize in [mention your specialties, e.g., portrait, landscape, event] photography. Every click of the shutter is an opportunity to freeze time and create memories that last a lifetime. Driven by creativity and a commitment to excellence, we approach every project with enthusiasm and dedication. Whether it's a wedding, a corporate event, or a personal photoshoot, we strive to exceed expectations and deliver images that resonate with our clients.
          </p>
          <div className="clip-button bg-[#e7dcba] relative m-10 hover:scale-110">
            <Link to="/#work">
            <button className="btn2 p-4 m-1 clip-button bg-black">See My Work</button>
            </Link>
          </div>
        </div>
        <div className="lg:flex flex-col align-baseline justify-center items-center lg:w-1/2 w-full my-20 overflow-hidden hidden">
          <img src={img} alt="Portrait" className="vector w-full h-full object-cover relative z-10 scale-125 -top-16 lg:-top-20" />
          <img
            src={img2}
            alt="Rectangle"
            className="image h-[350px] w-[350px] absolute z-0 size-1/2 lg:translate-y-4"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
