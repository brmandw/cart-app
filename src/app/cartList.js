import CartItem from "./cartItem";

export default function cartList({ items, quantities, onIncrement, onDecrement, onChangeQuantity }) {
  return (
    <>
      <div className="m-8">
        {items.length === 0 ? (
          <div className="flex justify-center items-center align-middle">Loading...</div>
        ) : (
          items.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              quantity={quantities[item.id] || 0}
              onDecrement={() => onDecrement(item.id)}
              onIncrement={() => onIncrement(item.id)}
              onChange={(val) => onChangeQuantity(item.id, val)}
            />
          ))
        )}
      </div>
    </>
  );
}
