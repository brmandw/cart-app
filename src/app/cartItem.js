"use client";
import { useEffect, useState } from "react";
import Counter from "./counter";
import useCartStore from "./store";

export default function CardItem({ product }) {
  const [count, setCount] = useState(1);
  const [hidden, setHidden] = useState(false);
  const { setCC, addToCart, rmvFromCart } = useCartStore()

  useEffect(() => {
    setCC()
  }, [])

  const increment = () => {
    setCount(count + 1);
    addToCart(1)
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      rmvFromCart(1)
    } else if (count === 1) {
      confirmDelete(1);
    }
  };

  // const handleChange = (e) => {
  //   const value = parseInt(e.target.value);
  //   if (!isNaN(value) && value >= 1) {
  //     setCount(value);
  //   } else if (value === 0) {
  //     confirmDelete(value);
  //   }
  // };

  const confirmDelete = (val) => {
    const confirm = window.confirm("Hapus belanjaan dari keranjang?");
    if (confirm) {
      setHidden(true);
      setCount(0)
      rmvFromCart(val)
    } else {
      setCount(1);
    }
  };

  return (
    <>
      {/* {!quantities[product.id] ? null : ( */}
      <div
        key={product.id}
        className={`mb-6 mx-4 md:mx-8 xl:mx-28 p-8 bg-[var(--luxury-gray)] rounded-xl border border-[#222] hover:border-[var(--luxury-gold)] 
          transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] ${
            hidden ? "hidden" : ""
          }`}
      >
        {/* Flex container */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Info & Mobile Controls */}
          <div className="flex-1 min-w-0">
            <div className="flex gap-4">
              {/* Image */}
              <div className="w-15 h-15 md:w-20 md:h-20 lg:w-20 lg:h-20 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="min-w-0">
                <h5 className="text-white font-medium text-sm md:text-base truncate">
                  {product.title}
                </h5>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  {product.category}
                </p>
                <p className="text-[var(--luxury-gold)] text-sm md:font-medium lg:font-medium mb-2 md:hidden lg:hidden">
                  ${product.price}
                </p>
              </div>
            </div>
            {/* Mobile-only price & total */}
            <div className="md:hidden mt-4 flex justify-between items-center">
              <div>
                <p className="text-[var(--luxury-gold)] font-medium mb-4 hidden">
                  ${product.price}
                </p>
                <Counter
                  increment={increment}
                  decrement={decrement}
                  // handleChange={handleChange}
                  count={count}
                />
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-sm">
                  ${(product.price * count || 0).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop-only price, counter, total */}
          <div className="hidden md:flex items-center gap-8 w-full md:w-auto justify-end">
            <div className="w-20 text-center text-[var(--luxury-gold)] font-medium">
              ${product.price}
            </div>
            <Counter
              increment={increment}
              decrement={decrement}
              // handleChange={handleChange}
              count={count}
            />
            <div className="w-20 text-center text-white font-bold">
              {(product.price * count || 0).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
