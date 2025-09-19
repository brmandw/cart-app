"use client";
import {useState} from "react";

export default function Count({countProp}) {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setCount(value);
    }
}

  return (
  <>
    <button className="bg-black text-white w-8 h-8 text-2xl cursor-pointer" onClick={handleDecrement}>-</button>
    <input className="w-8 h-8 text-center  flex justify-center items-center" type="text" onChange={handleChange} value={count}/>
    <button className="bg-black mx-0.5 text-white w-8 h-8 text-xl cursor-pointer" onClick={handleIncrement}>+</button>
  </>
  );
}

