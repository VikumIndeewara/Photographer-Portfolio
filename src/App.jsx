import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Book from "./Pages/Book";
import Home from "./Pages/Home";
import Lenis from 'lenis'


function App() {
  const lenis = new Lenis()

  lenis.on('scroll',(e) => {
    console.log(e)
  })

  function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  return (
    <div id="home" className="overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

