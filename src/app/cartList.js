'use client';
import Image from "next/image";
import CartItem from "./cardItem";
import { useState, useEffect } from "react";
import axios from "axios";

export default function cartList() {
    const [items, setItems] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        getItems();
    }, []);

    const getItems = async () => {
        const { data } = await axios("https://fakestoreapi.com/products?limit=5");
        setItems(data);
        const init = {};
        data.forEach(item => {
            init[item.id] = 1;
        });
        setQuantities(init);
        console.log(data);
    }

    const handleIncrement = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const handleDecrement = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) - 1 }));
    };

    return (
        <div className="m-8">
            {items.length === 0 ? (
                <p>Loading...</p>
            ) : (
                items.map((item) => (
                    <CartItem
                        key={item.id}
                        product={item}
                        quantity={quantities[item.id] || 0}
                        onDecrement={() => handleDecrement(item.id)}
                        onIncrement={() => handleIncrement(item.id)}
                    />
                ))
            )}

        </div>
    )
}

