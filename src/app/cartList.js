import CartItem from "./cartItem";

export default function CartList({ products, cart, onIncrement, onDecrement }) {
	return (
		<div className="flex flex-col gap-6 w-full max-w-2xl mx-auto mt-8">
			{products.map((product) => (
				<CartItem
					key={product.id}
					product={product}
					quantity={cart[product.id] || 0}
					onIncrement={() => onIncrement(product.id)}
					onDecrement={() => onDecrement(product.id)}
				/>
			))}
		</div>
	);
}
