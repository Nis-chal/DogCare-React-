import { FaPaw } from "react-icons/fa";

import { linklst } from "../utils/homesettings";
import SearchInput from "./SearchInput";
import { AiFillHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";

const Navbar = () => {
  const [dropdown, setDropDowm] = React.useState(true);
  const [showSearch, setSearch] = React.useState(false);

  const toggleDoprDown = () => {
    setDropDowm((prev) => !prev);
  };
  const toggleSearch = () => {
    setSearch((prev) => !prev);
  };
  return (
    <nav className="relative lg:static">
      <div className="nav-heading">
        <FaPaw />
        <h1 className="">Dog Care</h1>
      </div>
      <div className="nav-links w-[35%] absolute flex-column bg-white  bottom-full lg:static bg-blue -   ">
        {linklst.map((item) => {
          return (
            <span
              className={item.id === 1 ? "nav-item active" : "nav-item"}
              key={item.id}
            >
              {item.text}
            </span>
          );
        })}
      </div>

      <div className="d-flex  w-[40%] nav-search  lg:static  ms-auto">
        <div className="w-[100%] lg:w-[100%] ">
          <SearchInput show={showSearch} toggleSearch={toggleSearch} />
        </div>
        <div className=" nav-options ">
          <AiFillHeart className="heart-icon" />
          <div className="nav-cart relative">
            <HiShoppingCart className="icon" />
            <span className=" xl:after:content-['items'] xl:after:ms-2">2</span>
          </div>
        </div>
        <div
          className={
            dropdown
              ? "hamburger lg:hidden flex cursor-pointer  "
              : "hamburger  lg:hidden cursor-pointer"
          }
          onClick={toggleDoprDown}
        >
          <GiHamburgerMenu className="fa-bars" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
