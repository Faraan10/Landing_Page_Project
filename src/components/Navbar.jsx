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
        <FaSearch className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
        <FaShoppingCart className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
