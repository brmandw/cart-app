'use client';
import Image from "next/image";
import Counter from "./counter";
import { useState, useEffect} from "react";
import axios from "axios";

export default function CardItem() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const { data } = await axios("https://fakestoreapi.com/products?limit=30");
    setItems(data);
    console.log(data);
  }

  return (
    <div className="m-8">
      {items.length === 0 ? (
        <p>Loading...</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="mx-5 my-5 lg:mx-40 px-16 py-8 flex items-center gap-8 justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-8 w-130">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 min-h-[60px]">
                <h5 className="text-m lg:text-m font-semibold mb-2">{item.title}</h5>
                <p className="lg:text-m text-gray-600">{item.category}</p>
              </div>
            </div>
            <div className="flex gap-16 justify-center items-center w-full ">
              <div className="w-24 text-center"><p>${item.price}</p></div>
              <div className="flex items-center">
                <Counter />
              </div>
              <div className="w-24 text-center"><p>$0</p></div>
            </div>
          </div>
        ))
      )}

    </div>
  )
}

