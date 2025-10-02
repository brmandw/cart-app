import CartItem from "./cartItem";
import useCartStore from "./store";

export default function CartList() {
  const { products } = useCartStore()
    return (
    <>
      <div className="mx-8">
       {
       products.map((product) => (
        <CartItem key={product.id} product={product} />
       ))
       }
      </div>
    </>
  );
}
