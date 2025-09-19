"use client";

export default function Count({ onIncrement, onDecrement, quantity }) {
    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setQuantities(value);
        }
    }
    return (
        <>
            <button className="bg-black text-white w-8 h-8 text-2xl cursor-pointer" onClick={onDecrement}>-</button>
            <input className="w-8 h-8 text-center  flex justify-center items-center" type="text" onChange={handleChange} value={quantity} />
            <button className="bg-black mx-0.5 text-white w-8 h-8 text-xl cursor-pointer" onClick={onIncrement}>+</button>
        </>
    );
}

