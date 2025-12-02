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
      <div className="w-full min-h-screen relative">
        {data[0].map((canadets, index) => (
         <Canvas key={index} details={canadets} />
        ))}
      </div>
       <div className="w-full min-h-screen relative">
        {data[1].map((canadets, index) => (
         <Canvas key={index} details={canadets} />
        ))}
      </div>
       <div className="w-full min-h-screen relative">
        {data[2].map((canadets, index) => (
         <Canvas key={index} details={canadets} />
        ))}
      </div>
      <div className="w-full min-h-screen relative">
        {data[3].map((canadets, index) => (
         <Canvas key={index} details={canadets} />
        ))}
      </div>
      
    </>

  );
}

export default App;
