// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

// const loggedUser = () => {
//   return false;
// };

// const Nav = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const cartItems = useSelector((store) => store.cart.cartTotalQuantity);

//   return (
//     <div className="py-4 z-10  fixed top-0 left-0 right-0 bg-white border">
//       <div className="flex justify-between items-center  container">
//         <div className="logo">
//           <Link className="" to="/">
//             <img
//               className="w-[7rem]"
//               src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1684857846/logo_o2djkp.png"
//               alt=""
//             />
//           </Link>
//         </div>
//         <div className="links">
//           <Link to="/">
//             <p>Home</p>
//           </Link>

//           <Link to="/about">
//             <p>About Us</p>
//           </Link>
//           <Link to="/contact">
//             <p>Contact </p>
//           </Link>
//           <Link to="/author">
//             <p>Author</p>
//           </Link>
//         </div>

//         {isLoggedIn ? (
//           <button onClick={() => setIsLoggedIn(false)} className="  rounded">
//             <div className="flex  items-center gap-4">
//               <FaUserCircle />
//               <h1 className="bg-orange-500 rounded text-white px-2">Logout</h1>
//             </div>
//           </button>
//         ) : (
//           <button
//             onClick={() => setIsLoggedIn(true)}
//             className="bg-orange-500 mr-4 px-2 rounded text-white"
//           >
//             Login
//           </button>
//         )}

//         <Link to="/cart">
//         <div className="relative flex items-center">
//           <AiOutlineShoppingCart className="text-[1.5rem] font-bold text-black" />

//           <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//             {cartItems}
//           </span>
//         </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Nav;
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = useSelector((store) => store.cart.cartTotalQuantity);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 z-10 text-white  fixed top-0 left-0 right-0 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <div className="logo">
           <Link className="" to="/">
             <img
               className="w-[7rem]"
               src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1685512011/logo_dhguk4.png"
               alt=""
             />
           </Link>
         </div>
          </div>
          <div className="hidden sm:flex">
            <div className="ml-4 flex items-center space-x-4">
              {/* Add your menu items here */}
              <Link to="/">
                <p>Home</p>{" "}
              </Link>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
              <Link to="/cart">
                <div className="relative flex items-center">
                  <AiOutlineShoppingCart className="text-[1.5rem] font-bold text-white" />

                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex -mr-2 sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu" transition-style="fade:in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Add your menu items here */}
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
