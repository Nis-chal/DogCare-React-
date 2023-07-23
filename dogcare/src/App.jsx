import { useState } from "react";
import { Navbar, Slider } from "./components";
function App() {
  return (
    <>
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
