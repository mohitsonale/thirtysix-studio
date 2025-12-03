import "./index.css";
import Canvas from "./Canvas";
import data from "../data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll()
  },[])
  return (
    <>
      <div className="w-full min-h-screen relative font-['Helvetica_Now_Displa'] ">
        {/* {data[0].map((canadets, index) => (
         <Canvas key={index} details={canadets} />
        ))} */}

        <div className="w-full h-screen text-white">

          <nav className=" w-full p-8 flex justify-between  z-50">
            <div className="brand text-2xl font-regular ">thirtysixstudios</div>
            <div className="links flex gap-10">
              {["Home", "About", "Services", "Contact"].map((link, index) => (
                <a key={index}
                href={`#${link.toLowerCase()}`} 
                className="text-md hover:text-gray-300">
                  {link}
                    </a>
              ))}
            </div>
          </nav>

          <div className="textcontainer w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1]">
                At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.
              </h3>
              <p className= " text-lg w-[80%] mt-10 font-normal ">We're a boutique production studio focused on design,
                 animation, and technology, constantly rethinking what digital craft can do for 
                 present-day ads and campaigns.
              </p>
              <p className="text-md mt-10 ">scroll</p>

            </div>

          </div>

          <div className="w-full absolute bottom-0 left-10">
            <h1 className="text-[17rem] font-normal tracking-tight leading-none">thirtysixstudios</h1>
          </div>

        </div>
      </div>
       
      
    </>

  );
}

export default App;
