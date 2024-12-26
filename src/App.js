import React from "react";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { FooterImage } from "./pages/FooterImage";
import { Home } from "./pages/Home";
import { Links } from "./pages/Links";
import { Work } from "./pages/Work";
import { Footer } from "./ui/Footer";
import { NavBar } from "./ui/NavBar";
function App() {
  return (
    <div className='bg-gradient-to-tr from-pink-800 to-orange-400 w-[460px] sm:w-full'>
      <NavBar/>
      <Home/>
      <Links/>
      <FooterImage/>
      <About/>
      <Experience/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
