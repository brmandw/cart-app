import CardList from "./cartList";
import Navbar from "./navbar";
import { cartTotal } from "./cartList";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <CardList />
    </div>
  );
}
