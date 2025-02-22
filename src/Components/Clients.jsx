import React from "react";
import img from "../assets/Images/client.png";
import img2 from "../assets/Images/r1.jpg";
import img3 from "../assets/Images/r2.jpg";
import img4 from "../assets/Images/r3.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  useGSAP(() => {
    const text = new SplitType(".title2");

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: ".title2",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 3,
      },
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: { amount: 0.5 },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".title2",
        start: "top center",
        end: "bottom center",
        scrub: 2,
      },
    })
      .from(".img2", { left: -100, rotate: -10, opacity: 0 },"0")
      .from(".img3", { left: -100, rotate: -10, opacity: 0 },"0")
      .from(".img4", { left: -100, rotate: -10, opacity: 0 },"0");
  });

  return (
    <div className="w-dvw h-full text-white bg-black">
      <div className="container mx-auto flex flex-col justify-center lg:max-w-6xl max-w-xl overflow-y-hidden h-full">
        <h1 className="title2 font-wosker text-7xl p-10 m-5 text-center">
          WHAT'S CLIENTS SAYS
        </h1>
        <div className="flex lg:flex-row flex-col justify-center">
          <div className="flex justify-center lg:translate-x-32 relative z-40">
            <img src={img} alt="" className="relative z-20" />
            <div className="absolute w-[300px] h-[300px] z-10 bg-brand1 rounded-full opacity-30 blur-sm"></div>
            <div className="img2 absolute w-[150px] lg:left-[-150px] left-10 z-0 -rotate-12 p-2 bg-white hover:scale-110">
              <img src={img2} loading="lazy" alt="" />
            </div>
            <div className="img3 absolute overflow-hidden lg:bottom-0 lg:-left-32 left-96 z-0 rotate-12 p-2 bg-white hover:scale-110">
              <img src={img3} loading="lazy" className="object-cover w-[100px] h-[100px]" />
            </div>
            <div className="img4 absolute overflow-hidden lg:bottom-60 lg:left-56 left-0 bottom-0 z-0 -rotate-12 p-2 bg-white hover:scale-110">
              <img src={img4} loading="lazy" className="object-cover w-[100px] h-[100px]" />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:w-1/2 lg:-translate-x-20 px-5">
            <div className="bg-slate-50 bg-opacity-5 backdrop-blur-sm lg:ps-40 w-full lg:pe-20 lg:py-10 py-10 m-0 lg:rounded-br-full shadow-sm shadow-brand1 lg:text-start text-center">
              <span className="font-poppins font-bold text-3xl my-5">JOHN MAXWELL</span>
              <hr className="opacity-30 my-5" />
              <p className="font-Poppins my-3 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-20 lg:mt-5 mt-12">
          <button className="hover:scale-110">
            <FaArrowLeft />
          </button>
          <button className="hover:scale-110">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
