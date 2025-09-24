import CartItem from "./cartItem";
import useCartStore from "./store";

export default function cartList() {
  const { products } = useCartStore()
    return (
    <>
      <div className="m-8">
       {
       products.map((product) => (
        <CartItem key={product.id} product={product} />
       ))
       }
      </div>
    </>
  );
}
