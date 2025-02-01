import React from 'react'
// import Hero from "./Components/Hero";
import Hero from '../Components/Hero'
import MyWork from "../Components/MyWork";
import WhyMe from "../Components/WhyMe";
import Clients from "../Components/Clients";
import Contact from "../Components/Contact";
import Feature from "../Components/Feature";

const Home = () => {
  return (
    <div>
         <Hero />
        <Feature />
        <WhyMe />
        <MyWork />
        <Clients />
        <Contact />
    </div>
  )
}

export default Home