import { BiSearchAlt2 } from "react-icons/bi";
import { ImCross } from "react-icons/im";

const SearchInput = ({ show, toggleSearch }) => {
  return (
    <div
      className={
        show
          ? "bg-white  lg:min-w-[250px] md:min-w=[270px]  w-full items-center   lg:w-full  rounded-[25px] border-2 border-[#007fff] align-middle p-[6px] flex-row flex "
          : "bg-white p-0 lg:min-w-[250px] md:min-w=[270px]  w-max lg:w-full item-center rounded-[25px] lg:border-2 lg:border-[#007fff] lg:align-middle lg:p-[6px] lg:flex-row lg:flex "
      }
    >
      <input
        type="search"
        placeholder="Enter to search"
        className={
          show ? " lg-flex rounded-[25px]" : "hidden lg:flex rounded-[25px]"
        }
      />

      <div
        className={
          show
            ? "flex items-center justify-center "
            : "search-icon  bg-[#007fff] rounded-[50px] flex items-center justify-center p-[1px] w-[30px] h-[30px]  "
        }
        onClick={toggleSearch}
      >
        <ImCross
          className={
            show
              ? "flex lg:hidden cursor-pointer "
              : "hidden lg:hidden cursor-pointer"
          }
        />

        <BiSearchAlt2
          className={
            show
              ? "text-white w-[35px] h-[35px] p-[7px] hidden lg:flex cursor-pointer text-[20px] sm:text-[25px] "
              : "text-white cursor-pointer w-[35px] h-[35px] p-[7px]  lg:flex text-[20px] sm:text-[25px] "
          }
        />
      </div>
    </div>
  );
};

export default SearchInput;
