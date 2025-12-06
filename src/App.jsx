import "./index.css";
import Canvas from "./Canvas";
import data from "../data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"


function App() {

  const [showcanva, Setshowcanva] = useState(false)
  const headingref = useRef(null)
  const growingspan = useRef(null)

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll()

  }, [])

  useGSAP(() => {

    headingref.current.addEventListener("click", (e) => {
      Setshowcanva(!showcanva)

      if (!showcanva) {
        gsap.set(growingspan.current, {
          top: e.clientY,
          left: e.clientX
        })

        gsap.to("body", {
          color: "#000",
          backgroundColor: "#fd2c2a",
          duration: 1.2,
          ease: "power2.inOut",
        })
        gsap.to(growingspan.current, {
          scale: 1000,
          duration: 2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(growingspan.current, {
              scale: 0,
              clearProps: "all",
            })

          },
        })
      }
      else{
        gsap.to("body", {
          color: "white",
          backgroundColor: "black",
          duration: 1.2,
          ease: "power2.inOut",
        })
      }
        






    })
  }, [showcanva])


  return (
    <>
      <span ref={growingspan} className="growing block fixed rounded-full  top-[-20px] left-[-20px] h-5 w-5"></span>
      <div className="w-full min-h-screen relative font-['Helvetica_Now_Displa'] ">
        {showcanva &&
          data[0].map((canadets, index) => (
            <Canvas key={index} details={canadets} />
          ))}


        <div className="w-full h-screen relative z-1 ">

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
              <p className=" text-lg w-[80%] mt-10 font-normal ">We're a boutique production studio focused on design,
                animation, and technology, constantly rethinking what digital craft can do for
                present-day ads and campaigns.
              </p>
              <p className="text-md mt-10 ">scroll</p>

            </div>

          </div>

          <div className="w-full absolute bottom-0 left-10">
            <h1 ref={headingref} className="text-[14rem] font-normal tracking-tight leading-none">Thirtysixstudios</h1>
          </div>

        </div>
      </div>

      <div className="w-full h-screen  mt-32 px10 ">
        {/* {data[1].map((canadets, index) => (
         <Canvas key={index} details={canadets} />
        ))} */}


        <h1 className="text-8xl tracking-tighter">about the brand</h1>
        <p className="text-4xl w-[80%] leading-[1.8] mt-10  font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quidem vero,
          quia molestiae dolorum esse? Voluptate odio incidunt deleniti nostrum fugiat omnis molestiae impedit aperiam,
          excepturi, minus adipisci ipsam. Adipisci?</p>

        <img className="w-[80%] mt-10" src="https://wallpaperbat.com/img/7236501-dark-anime-background.jpg" alt="" />


      </div>


    </>

  );
}

export default App;
