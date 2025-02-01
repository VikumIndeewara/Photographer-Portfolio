import React, { useEffect } from "react";
import backImage from "../assets/Images/dark.jpg";
import backCam from "../assets/Images/darkcam.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from 'lenis'
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // let tl = gsap.timeline({});

  // useGSAP(() => {
  //   gsap.from(".firstName", {
  //     duration: 2,
  //     x: -50,
  //     opacity: 0,
  //   });
  //   gsap.from(".lastName", {
  //     duration: 2,
  //     x: 50,
  //     opacity: 0,
  //   });
  //   gsap.from(".info", {
  //     duration: 2,
  //     y: 50,
  //     opacity: 0,
  //   });
  //   gsap.from(".btn", {
  //     duration: 2,
  //     scale: 0.5,
  //     opacity: 0,
  //   });
  //   tl.to(".info", {
  //     y: 50,
  //     opacity: 0,
  //     duration:2,
  //   });
  //   tl.to(".btn", {
  //     y: 50,
  //     opacity: 0,
  //     duration:2,
  //   });
  //   tl.to([".backText",".frontText"], {
  //     y: 200,
  //     duration:2,
  //   });
  //   ScrollTrigger.create({
  //     animation: tl,
  //     trigger: ".container",
  //     start: "+=100 top",
  //     end: "+=500 30%",
  //     scrub: 2,
  //   });
  // });

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(50, 50, 0, 0.4), rgba(0, 0, 0, 0.5)),url(${backImage})`,
      }}
      className={`bg-cover bg-center h-[90vh] flex flex-col justify-center items-center relative`}
    >
      <div className="container mx-auto flex flex-row justify-center items-center absolute z-0 w-dvw ">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="backText flex lg:gap-20 gap-5 relative sm:flex-row flex-col">
            <span className="firstName font-wosker lg:text-9xl  text-7xl text-white ">
              KEVIN
            </span>
            <div className="lastName font-wosker lg:text-9xl text-7xl text-white relative">
              ANDERSON
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${backCam})`,
            }}
            className={`bg-cover bg-center h-dvh w-dvw flex flex-col justify-center absolute left-0 right-10 z-20`}
          >
            {" "}
          </div>
          <div className="frontText flex lg:gap-20 gap-5 absolute top-0 z-30 sm:flex-row flex-col">
            <span className="firstName font-wosker lg:text-9xl  text-7xl text-white ">
              KEVIN
            </span>
            <div className="lastName font-wosker lg:text-9xl text-7xl text-transparent text-stroke-3 pointer-events-none">
              ANDERSON
            </div>
          </div>

          <div className="info flex-col justify-center relative z-40 ">
            <div className="text-3xl text-center text-brand1 font-Poppins ">
              Let’s Make Your Moments Legendary.
            </div>
            <p className="w-full lg:px-60 text-white text-center opacity-35 font-Poppins">
              turn your most meaningful moments into works of art. With a
              passion for storytelling and years of experience behind the lens,
              .
            </p>
          </div>
          <div>
            <Link to={"/contact"}>
              <button className="btn relative z-50 font-Poppins lg:text-3xl lg:p-5 my-5 text-xl p-3 clip-button hover:bg-brand2 hover:text-white">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
