import { useState } from "react";
import "./App.css";
import Intro from "./Pages/Intro";
import IntroImage from "./Assets/Intro.png";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Certificates from "./Pages/Certificates";
import Portfolio from "./Pages/Portfolio";
import Testimonial from "./Pages/Testimonial";
import Contact from "./Pages/Contact";

function App() {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  return (
    <>
      <Intro
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <About />
      <Experience />
      <Certificates />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;
