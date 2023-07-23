import { FaPaw } from "react-icons/fa";

import { linklst } from "../utils/homesettings";
import SearchInput from "./SearchInput";
import { AiFillHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-heading">
        <FaPaw />
        <h1 className="">Dog Care</h1>
      </div>
      <div className="nav-links w-[35%] bg-blue bg-white ">
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

      <div className="d-flex  w-[40%] nav-search">
        <div className="w-100">
          <SearchInput />
        </div>
        <div className=" nav-options ">
          <AiFillHeart className="heart-icon" />
          <div className="nav-cart">
            <HiShoppingCart className="icon" />
            <span>2 items</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
