"use client";
import Counter from "./counter";
import { useState, useEffect } from "react";

export default function CardItem({
  product,
  quantity,
  onIncrement,
  onDecrement,
  onChange,
}) {
  const total = (product.price * quantity || 0).toFixed(2);
  const [inCart, setInCart] = useState(true);

  useEffect(() => {
    if (quantity === 0 && inCart) {
      const confirmDelete = window.confirm("Hapus belanjaan dari keranjang?");
      if (confirmDelete) {
        setInCart(false);
      } else {
        onChange(1);
      }
    }
  }, [quantity, inCart]);

  return (
    <>
      {quantity === 0 ? null : (
        <div
          key={product.id}
          className="mb-5 p-5 xl:mx-20 xl:px-24 lg:mx-15 lg:px-12 flex lg:justify-between
          bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
        >
            {/* Image*/}
            <div className="w-20 h-20 mr-5 xl:w-20 xl:h-20 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Title and category */}
            <div className="min-h-[60px] xl:mr-8">
              <h5 className="w-45 md:w-50 lg:55 xl:55 text-xs xl:text-base font-semibold xl:mb-2">
                {product.title}
              </h5>
              <p className="text-xs xl:text-sm text-gray-600">
                {product.category}
              </p>
              
              {/* Price counter and total for mobile screen */}
              <div className="xl:hidden md:hidden w-24 text-xs mt-2">
                <p>${product.price}</p>
              </div>
              <div className="xl:hidden md:hidden flex justify-between items-center w-full">
                <div className="xl:hidden md:hidden mt-2 flex justify-end">
                  <Counter
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    quantity={quantity}
                    onChange={(val) => onChange(val)}
                  />
                </div>
                <div className="text-xs text-right font-bold mt-2 xl:hidden md:hidden">
                  <p>Total: ${total}</p>
                </div>
              </div>
            </div>

            {/* Price counter and total for larger screen */}
            <div className="hidden md:flex xl:flex gap-8 justify-center items-center">
              <div className="w-24 text-sm text-center">
                <p>${product.price}</p>
              </div>
              <div className="flex items-center">
                <Counter
                  onDecrement={onDecrement}
                  onIncrement={onIncrement}
                  quantity={quantity}
                  onChange={(val) => onChange(val)}
                />
              </div>
              <div className="w-24 text-sm font-bold text-center">
                <p>${total}</p>
              </div>
            </div>
        </div>
      )}
    </>
  );
}
