import CardItem from "./cardItem";
import Navbar from "./navbar";
import CardList from "./cartList";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <CardList />
    </div>
  );
}
