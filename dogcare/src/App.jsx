import { Navbar, Slider, Footer } from "./components";
import about1 from "./assets/About1.png";
import about2 from "./assets/About2.png";
import about3 from "./assets/About3.png";
import vector from "./assets/Vector.png";
import vector1 from "./assets/Vector1.png";
import tick from "./assets/tick.png";
import { IoIosArrowForward } from "react-icons/io";
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

      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 box gap-[5%] h-[100vh] "
      >
        <div className="about-img relative lg  hidden md:flex pt-[10%] md:mt-[10%] lg:mt-0 ">
          <div className="absolute top-[10%] right-[13%] aspect-[1/1] w-[60%]   ">
            <img
              src={vector}
              alt=""
              className=" object-contain w-full h-full "
            />
          </div>
          <div className="absolute md:top-[45%] lg:top-[62%] left-[15%] aspect-[1/1] w-[30%]">
            <img
              src={vector1}
              alt=""
              className=" object-contain w-full h-full "
            />
          </div>
          <div className="absolute top-[23%] left-0 bg-white p-[1%] rounded-md aspect-[1/1] w-[65%] ">
            <img src={about1} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="absolute top-[40%] lg:top-[60%] right-[27%] bg-white p-[1%] rounded-md  aspect-[1.2/1] w-[42%] ">
            <img src={about3} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="absolute md:top-[35%] lg:top-[47%] right-[20%] bg-white p-[1%] rounded-md w-[30%]  ">
            <img src={about2} alt="" className="" />
          </div>
        </div>

        <div className="about-info pt-[25%] flex flex-col gap-[5%] ">
          <h1 className="Nunito-font font-[800] text-[45px] text-[var(--blue-1000)]  ">
            About us
          </h1>
          <p className="leading-[32px] text-[22px] text-[var(--dark-100)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            corporis omnis in, delectus fugit numquam incidunt ad consequuntur
            doloribus
          </p>

          <ul className="flex flex-col gap-4">
            <li className="flex flex-row gap-2 items-center">
              <div className="w-[14px] h-[14px]">
                <img
                  src={tick}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>{" "}
              Comprehensive
            </li>
            <li className="flex flex-row gap-2 items-center">
              <div className="w-[14px] h-[14px]">
                <img
                  src={tick}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>{" "}
              Professional
            </li>
            <li className="flex flex-row gap-2 items-center">
              <div className="w-[14px] h-[14px]">
                <img
                  src={tick}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>{" "}
              Comprehensive verterinary service
            </li>
          </ul>

          <button className="flex flex-row p-2 lg:w-[160px] justify-between ps-[5%] w-[calc(140px_+_5%)] text-white gap-3 rounded-[25px]  bg-[var(--blue-500)] items-center">
            Contact{" "}
            <div className="w-[30px] aspect-[1/1] rounded-[50px] bg-white flex flex-row justify-center items-center">
              <IoIosArrowForward className=" text-[var(--blue-500)]" />
            </div>
          </button>
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
