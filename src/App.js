import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");
  return (
    <div className="flex-1 h-screen w-full" style={{ backgroundColor: color }}>
      <div className="flex justify-center flex-wrap bottom-14 fixed  inset-x-0 rounded mx-14 py-2 gap-1">
        <button
          className=" text-white rounded-full  px-3 oy-2"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="rounded-full  px-3 oy-2 text-white "
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="rounded-full  px-3 oy-2 text-white "
          style={{ backgroundColor: "purple" }}
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
        <button
          className="rounded-full  px-3 oy-2 text-white "
          style={{ backgroundColor: "black" }}
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="rounded-full  px-3 oy-2 text-white "
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          className="rounded-full  px-3 oy-2 text-white "
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="rounded-full  px-3 oy-2 text-white "
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="rounded-full  px-3 oy-2 text-white "
          style={{ backgroundColor: "white" }}
          onClick={() => setColor("white")}
        >
          White
        </button>
      </div>
    </div>
  );
}

export default App;
