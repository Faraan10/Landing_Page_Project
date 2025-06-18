import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md px-6">
      {/* Logo */}
      <div className="navbar-start">
        <span className="text-xl font-bold text-red-600">
          HEBRON <span className="text-orange-400">NUTRITION</span>
        </span>
      </div>

      {/* Center Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Shop by brand</summary>
              <ul className="p-2 bg-base-100 z-10">
                <li>
                  <a>Brand A</a>
                </li>
                <li>
                  <a>Brand B</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Shop by category</summary>
              <ul className="p-2 bg-base-100 z-10">
                <li>
                  <a>Category A</a>
                </li>
                <li>
                  <a>Category B</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Meet us CMO</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </ul>
      </div>

      {/* Right Side Icons */}
      <div className="navbar-end flex gap-3 text-xl">
        <FaSearch className="text-2xl cursor-pointer" />
        <FaUser className="text-2xl cursor-pointer" />
        <div className="relative">
          <FaShoppingCart className="text-2xl md:text-3xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
