import { FaPaw } from "react-icons/fa";
import React from "react";
import { linklst } from "../utils/homesettings";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <FaPaw />
        <h1>Dog Care</h1>
      </div>
      {linklst.map((item) => {
        <span key={item.id}>{item.text}</span>;
      })}
    </nav>
  );
};

export { Navbar };
