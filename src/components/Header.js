import React from "react";
import { ImSearch } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="logo font-bold font-serif">
          <Link to="/">EHAYAAN</Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus:focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="Search product here...."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-yellow-800 flex items-center justify-center rounded-r-full text-white">
            <ImSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            <FaUserCircle />
          </div>
          <div className="text-2xl relative ">
            <span>
              {" "}
              <TiShoppingCart />
            </span>
            <div className="bg-purple-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-xs">0</p>
            </div>
          </div>

          <div>
            <button className="px-3 py-1 rounded-full text-white bg-purple-500 hover:bg-yellow-600">
              <Link to="/login"> Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
