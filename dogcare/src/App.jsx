import { useState } from "react";
import { Navbar, Slider } from "./components";
function App() {
  return (
    <>
      <section className=" w-100 bg-[#007fff] text-white font-[700] text-center py-3 ">
        Call us for Veterinary Support: +977-9861859764
      </section>
      <div className="">
        <Navbar />
      </div>

      <section id="one">
        <Slider />
      </section>
    </>
  );
}

export default App;
