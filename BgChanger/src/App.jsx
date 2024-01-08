import { useState } from "react"


function App() {
  const [color, setcolor] = useState("Olive")

  return (
    <div className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
          <button className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
