import React, { useEffect } from "react";
import backImage from "../assets/Images/dark.jpg";
import backCam from "../assets/Images/darkcam.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {


  useEffect(() => {
    const text = new SplitType('.subHead')
    const textInfo = new SplitType('.subInfo');
    setTimeout(() => {
      if (textInfo?.chars?.length && text?.chars?.length) {
        gsap.from([textInfo.chars,text.chars], {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: { amount: 1 },
        });
      }
    }, 100);
  }, []);
  
  


  let tl = gsap.timeline({});

  useGSAP(() => {
    gsap.from(".firstName", {
      duration: 2,
      x: -50,
      opacity: 0,
    });
    gsap.from(".lastName", {
      duration: 2,
      x: 50,
      opacity: 0,
    });
    gsap.from(".info", {
      duration: 2,
      y: 50,
      opacity: 0,
    });
    gsap.from(".btn", {
      duration: 2,
      scale: 0.5,
      opacity: 0,
    });
    tl.to(".info", {
      y: 50,
      opacity: 0,
      duration:2,
    });
    tl.to(".btn", {
      y: 50,
      opacity: 0,
      duration:2,
    });
    tl.to([".backText",".frontText"], {
      y: 200,
      duration:3,
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".container",
      start: "+=100 top",
      end: "+=500 30%",
      scrub: 3,
    });
  });

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(50, 50, 0, 0.4), rgba(0, 0, 0, 0.5)),url(${backImage})`,
      }}
      className={`bg-cover bg-center h-[90vh] flex flex-col justify-center items-center relative`}
    >
      <div className="container mx-auto flex flex-row justify-center items-center absolute z-0 w-dvw">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="backText flex lg:gap-20 gap-5 relative sm:flex-row flex-col">
            <span className="firstName text-center font-wosker lg:text-9xl  text-7xl text-white ">
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
            <span className="firstName text-center font-wosker lg:text-9xl  text-7xl text-white ">
              KEVIN
            </span>
            <div className="lastName font-wosker lg:text-9xl text-7xl text-transparent text-stroke-3 pointer-events-none">
              ANDERSON
            </div>
          </div>

          <div className="info flex-col justify-center relative z-40  ">
            <div className="subHead lg:text-3xl text-2xl text-center text-brand1 font-Poppins pb-2">
              Let’s Make Your Moments Legendary.
            </div>
            <p className="subInfo w-full lg:px-60 text-white text-center opacity-35 font-Poppins lg:text-xl text-sm px-5">
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
