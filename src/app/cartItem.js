import Counter from "./counter";

export default function CartItem({ product, quantity, onIncrement, onDecrement }) {
  const total = (product.price * quantity).toFixed(2);
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
      <img src={product.image} alt={product.title} className="w-20 h-20 object-contain rounded-md bg-gray-50" />
      <div className="flex-1">
        <div className="font-medium text-base mb-1 line-clamp-2">{product.title}</div>
        <div className="text-gray-500 text-sm mb-2">${product.price.toFixed(2)}</div>
        <Counter value={quantity} onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
      <div className="text-right min-w-[80px]">
        <div className="text-xs text-gray-400">Total</div>
        <div className="font-semibold text-lg">${total}</div>
      </div>
    </div>
  );
}