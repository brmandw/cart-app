"use client";
import Counter from "./counter";


export default function CardItem({ product, quantity, onIncrement, onDecrement, onChange}) {
  const total = (product.price * quantity || 0).toFixed(2);

  return (
    <>
    { quantity === 0 ? null :
    <div
      key={product.id}
      className="mx-5 my-5 lg:mx-40 px-16 py-8 flex items-center gap-8 justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-8 w-130">
        <div className="w-20 h-20 flex items-center justify-center bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-40 min-h-[60px]">
          <h5 className="text-m lg:text-m font-semibold mb-2">
            {product.title}
          </h5>
          <p className="lg:text-m text-gray-600">{product.category}</p>
        </div>
      </div>
      <div className="flex gap-16 justify-center items-center w-full ">
        <div className="w-24 text-center">
          <p>${product.price}</p>
        </div>
        <div className="flex items-center">
          <Counter onDecrement={onDecrement} onIncrement={onIncrement} quantity={quantity} onChange={(val) => onChange(val)}/>
        </div>
        <div className="w-24 text-center">
          <p>${total}</p>
        </div>
      </div>
    </div>
    }
    </>
  );
}
