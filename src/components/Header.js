import React from "react";
import { ImSearch } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-around">
        <div className="logo font-bold font-serif">
          <Link to="/" className="font-bold text-lg">
            EHYAN
          </Link>
        </div>

        <div className="pl-4 with">
          <Link to="/" className="now">
            Home
          </Link>
          <Link to="/auto" className="now">
            Auto
          </Link>
          <Link to="/booking" className="now">
            Booking
          </Link>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            <FaUserCircle />
          </div>

          <div>
            <button className="px-3 py-1 rounded-full text-white bg-purple-500 hover:bg-yellow-600">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
