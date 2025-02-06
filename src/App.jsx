import { useEffect } from "react";
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
 
  return (


    <>
      <Header/>
      <main >
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Testimonial/>
      </main>
    </>
  )
}

export default App
