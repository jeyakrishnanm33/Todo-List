import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(i) {
    setCount(count + i);
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-64">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Count: {count}
        </h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={()=>handleClick(1)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Increase
          </button>

          <button
            onClick={()=>handleClick(-1)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
