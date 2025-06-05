import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Book from "./Pages/Book";
import Home from "./Pages/Home";

function App() {
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

{
  /* <Header />
    <Hero />
    <Feature/>
    <WhyMe/>
    <MyWork/>
    <Clients/>
    <Contact/>
    <Footer/> */
}
