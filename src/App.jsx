import "./index.css";
import Canvas from "./Canvas";
import data from "../data";

function App() {
  return (
    <>
      <div className="w-full min-h-screen relative bg-black text-white">
        {data[0].map((canadets, index) => (
         <Canvas key={index} details={canadets} />
        ))}
      </div>
    </>
  );
}

export default App;
