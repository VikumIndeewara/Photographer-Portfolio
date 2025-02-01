import React, { useState } from "react";
import img from "../assets/Images/w1.jpg";
import img1 from "../assets/Images/w2.jpg";
import img2 from "../assets/Images/w3.jpg";
import img3 from "../assets/Images/w4.jpg";
import img4 from "../assets/Images/w5.jpg";
import img5 from "../assets/Images/w6.jpg";

const MyWork = () => {
    const [active,setActive] = useState("WEDDINGS");
    const works = ["WEDDINGS", "PRODUCTS", "LANDSCAPES", "FOODS", "EVENTS"];

  
  return (
    <div id="work" className="w-dvw h-full bg-black">
      <div className="container mx-auto lg:px-20 flex flex-col justify-center lg:max-w-6xl max-w-xl ">
        <h2 className="text-white font-wosker text-center text-7xl m-5">
          MY WORK
        </h2>
        <div className="w-full h-full flex lg:justify-center my-3 overflow-hidden">
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
            <div className="overflow-hidden">
              <img
                src={`${img}`}
                className="w-full h-full object-cover hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>
            <div className="overflow-hidden row-span-2">
              <img src={`${img1}`} className="w-full h-full object-cover hover:scale-125 transition  duration-300 ease-in-out" />
            </div>
            <div className="overflow-hidden lg:row-auto row-span-2 ">
              <img src={`${img2}`} className="w-full h-full object-cover hover:scale-125 transition  duration-300 ease-in-out" />
            </div>
            <div className="overflow-hidden row-span-2">
              <img src={`${img3}`} className="w-full h-full object-cover hover:scale-125 transition  duration-300 ease-in-out" />
            </div>
            <div className="overflow-hidden ">
              <img src={`${img4}`} className="w-full h-full object-cover hover:scale-125 transition  duration-300 ease-in-out" />
            </div>
            <div className="overflow-hidden col-span-2">
              <img src={`${img5}`} className="w-full h-full object-cover hover:scale-125 transition  duration-300 ease-in-out" />
            </div>
          </div>
        </div>
        <span className="text-white flex justify-end my-5 cursor-pointer hover:text-brand1">See More</span>
      </div>
    </div>
  );
};

export default MyWork;
