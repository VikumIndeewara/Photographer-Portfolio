import React, { useState,useEffect } from "react";
import img from "../assets/Images/w1.jpg";
import img1 from "../assets/Images/w2.jpg";
import img2 from "../assets/Images/w3.jpg";
import img3 from "../assets/Images/w4.jpg";
import img4 from "../assets/Images/w5.jpg";
import img5 from "../assets/Images/w6.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

const MyWork = () => {
  let tl = gsap.timeline({});

    useEffect(() => {
      const text = new SplitType('.title')
      console.log(text.chars[[0]])
      setTimeout(() => {
        if (text?.chars?.length ) {
          gsap.from(text.chars, {
            scrollTrigger:{
              trigger:".title",
              start: "-=600 top",
              end: "-=400 bottom",
              scrub : 5
            },
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: { amount: 1 },
          });
        }
      }, 100);
    }, []);

  useGSAP(() => {
    gsap.from(".categories",{
      opacity:0,
      width:0
    })
    gsap.utils.toArray(".imgCont").forEach((img, i) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "top 50%",
          scrub: 0.5,
        },
        opacity: 0,
        scale: 0.8, 
        duration: 0.5,
        delay: i * 0.1,
      });
    });
  });


    const [active,setActive] = useState("WEDDINGS");
    const works = ["WEDDINGS", "PRODUCTS", "LANDSCAPES", "FOODS", "EVENTS"];

  
  return (
    <div id="work" className="w-dvw h-full bg-black">
      <div className="container mx-auto lg:px-20 flex flex-col justify-center lg:max-w-6xl max-w-xl ">
        <h2 className="title text-white font-wosker text-center text-7xl m-5">
          MY WORK
        </h2>
        <div className="categories w-full h-full flex lg:justify-center my-3 overflow-hidden">
          {works.map((work, i) => (
            <button key={i} 
            className={`${(active==work) ? "bg-brand1" : "bg-white"} text-black font-semibold py-3 px-5 lg:m-5 m-1  rounded-full hover:opacity-80` }
            onClick={()=>setActive(work)}
            >
              {work}
            </button>
          ))}
        </div>
        <div className="">
          <div className="relative grid lg:grid-rows-3 lg:grid-cols-3 grid-rows-4 lg:h-[90vh] h-full w-full gap-3">
            <div className="imgCont overflow-hidden">
              <img
                src="/w1.jpg"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>
            <div className="imgCont overflow-hidden row-span-2">
              <img src={`${img1}`} loading="lazy" className="w-full h-full object-cover hover:scale-125 transition  duration-300 ease-in-out" />
            </div>
            <div className="imgCont overflow-hidden lg:row-auto row-span-2 ">
              <img src={`${img2}`} loading="lazy" className="w-full h-full object-cover hover:scale-125 transition  duration-300 ease-in-out" />
            </div>
            <div className="imgCont overflow-hidden row-span-2">
              <img src={`${img3}`} loading="lazy" className="w-full h-full object-cover hover:scale-125 transition  duration-300 ease-in-out" />
            </div>
            <div className="imgCont overflow-hidden ">
              <img src={`${img4}`} loading="lazy" className="w-full h-full object-cover hover:scale-125 transition  duration-300 ease-in-out" />
            </div>
            <div className="imgCont overflow-hidden col-span-2">
              <img src={`${img5}`} loading="lazy" className="w-full h-full object-cover hover:scale-125 transition  duration-300 ease-in-out" />
            </div>
          </div>
        </div>
        <span className="text-white flex justify-end my-5 cursor-pointer hover:text-brand1">See More</span>
      </div>
    </div>
  );
};

export default MyWork;
