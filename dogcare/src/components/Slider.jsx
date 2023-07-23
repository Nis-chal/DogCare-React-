import React from "react";
import { slidelst } from "../utils/homesettings";
const Slider = () => {
  return (
    <div>
      {slidelst.map((item) => (
        <img src={item.url} alt="" key={item.id} />
      ))}
    </div>
  );
};

export default Slider;
