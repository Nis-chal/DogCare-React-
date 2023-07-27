import { Navbar, Slider, Footer } from "./components";
import about1 from "./assets/About1.png";
import about2 from "./assets/About2.png";
import about3 from "./assets/About3.png";
import vector from "./assets/Vector.png";
import vector1 from "./assets/Vector1.png";
import tick from "./assets/tick.png";
import { IoIosArrowForward } from "react-icons/io";
import { servicelst } from "./utils/homesettings";
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

      <section className="p-[5%]    flex flex-col gap-7 h-[170vh] justify-center ">
        <h1 className="Nunito-font font-[800] text-[45px] text-[var(--blue-1000)] text-center  ">
          Our Services
        </h1>
        <p className="Nunito-font font-[500] text-[clamp(14px_,11px_+_1vw,_22px)] text-center  lg:text-[clamp(14px_,13px_+_5vw,_26px)] md:leading-8  ">
          We provide a wide range of products & services for pets such as food,
          toys, grooming supplies, and veterinary care. We aim to meet the needs
          of pet owners and ensure the health and happiness of their furry
          friends.
        </p>
        <div className="grid  grid-cols-[repeat(2,1fr)] md:grid-cols-3 gap-[2%] lg:gap-[5%]   lg:px-[5%] w-full grid- ">
          {servicelst.map((item) => {
            return (
              <div
                className="aspect-[1/1.4] lg:aspect-[1/1.2]  border-[var(--border-color)] border-[1px] border-solid rounded-lg  flex flex-col w-full "
                key={item?.id}
              >
                <div className=" aspect-[1/0.5] w-full">
                  <img
                    src={item?.url}
                    alt=""
                    className="w-full  object-cover"
                  />
                </div>
                <div className="p-[5%]   flex flex-col justify-between flex-1 ">
                  <h2 className="Nunito-font text-[14px] lg:text-[20px] font-[800] text-[var(--blue-1000)] line-clamp-1 ">
                    {item?.title}
                  </h2>
                  <p className="text-[12px] md:text-[16px] Nunito-font font-[500] text-[var(--dark-100)] line-clamp-2 lg:line-clamp-4 ">
                    {item?.desc}
                  </p>
                  <div className="flex flex-row justify-center justify-self-end mt-auto  ">
                    <button className="mx-auto bg-[var(--blue-1000)] text-[14px] text-white rounded-md p-[2%] w-[60%] lg:w-[35%] py-2  lg:py-3 inter-font font-[500] ">
                      view more
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
