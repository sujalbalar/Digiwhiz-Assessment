import { useState } from 'react';
import Hamb from "../images/hamb.svg";
import Close from "../images/close.svg";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <li to="/" className="text-xl font-bold">
          My App
        </li>
        <button
          className="block sm:hidden"
          onClick={toggleMenu}
        >
          {/* <Hamb/> */}
        </button>
      </div>

      <div
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <li className="block py-2 px-4 rounded hover:bg-gray-700">
            Home
          </li>
          <li className="block py-2 px-4 rounded hover:bg-gray-700">
            About us
          </li>
          <li className="block py-2 px-4 rounded hover:bg-gray-700">
            Features
          </li>
          <li className="block py-2 px-4 rounded hover:bg-gray-700">
            Project
          </li>
          <li className="block py-2 px-4 rounded hover:bg-gray-700">
            Pages
          </li>
          <li className="block py-2 px-4 rounded hover:bg-gray-700">
            Contact
          </li>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;