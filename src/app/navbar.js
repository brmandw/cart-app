import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 px-10 bg-white shadow-md">
      <h2>OwlShop</h2>

        <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6 text-gray-700" />


    </nav>
  );
}

