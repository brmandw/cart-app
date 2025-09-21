"use client";

export default function Count({
  onIncrement,
  onDecrement,
  quantity,
  onChange,
}) {
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      onChange(value); 
    }
  };
  return (
    <>
      <button
        className="bg-black text-white w-5 h-5 text-sm lg:w-7 lg:h-7 lg:text-lg cursor-pointer"
        onClick={onDecrement}
      >
        -
      </button>
      <input
        className="w-5 h-5 text-xs lg:w-12 lg:h-8 lg:text-base lg: text-center flex justify-center items-center"
        type="text"
        onChange={handleChange}
        value={quantity}
      />
      <button
        className="bg-black mx-0.5 text-white w-5 h-5 text-xs lg:w-7 lg:h-7 lg:text-lg cursor-pointer"
        onClick={onIncrement}
      >
        +
      </button>
    </>
  );
}
