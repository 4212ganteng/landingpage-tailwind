import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Card } from "flowbite-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Secta from "./components/Secta";
import Bsect from "./components/Bsect";
import Csection from "./components/Csection";
import Dsect from "./components/Dsect";
import Carousel from "./components/Carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Dsect />
      <Csection />
      <Secta />
      <Carousel />
      {/* <Bsect /> */}
    </>
  );
}

export default App;
