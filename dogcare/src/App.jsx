import { Navbar, Slider, Footer } from "./components";
import about1 from "./assets/About1.png";
import about2 from "./assets/About2.png";
import about3 from "./assets/About3.png";
import vector from "./assets/Vector.png";
import vector1 from "./assets/Vector1.png";
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

      <section id="about" className="grid grid-cols-2 box gap-[5%] ">
        <div className="about-img relative lg ">
          <div className="absolute top-0 right-0  ">
            <img src={vector} alt="" className="" />
          </div>
          <div className="absolute bottom-0 left-0  ">
            <img src={vector1} alt="" />
          </div>
        </div>

        <div className="about-info">
          <h1 className="Nunito-font font-[800] text-[45px] text-[var(--blue-1000)]  ">
            About us
          </h1>
          <p className="leading-[32px] text-[22px] text-[var(--dark-100)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            corporis omnis in, delectus fugit numquam incidunt ad consequuntur
            doloribus 
          </p>

          <ul>
            <li>Comprehensive</li>
            <li>Professional</li>
            <li>Comprehensive verterinary service</li>
          </ul>
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
