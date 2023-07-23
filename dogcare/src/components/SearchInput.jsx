import { BiSearchAlt2 } from "react-icons/bi";
const SearchInput = ({ show, toggleSearch }) => {
  return (
    <div
      className={
        show
          ? "bg-white p-0 lg:min-w-[300px] w-full border-r-[25px] lg:border-2 lg:border-[#007fff] lg:align-middle lg:p-[6px]  "
          : "bg-white p-0 lg:min-w-[300px] w-max lg:w-full  rounded-[25px] lg:border-2 lg:border-[#007fff] lg:align-middle lg:p-[6px] lg:flex-row lg:flex "
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
        className="search-icon  bg-[#007fff] rounded-[50px] flex align-middle justify-center p-[2px]  "
        onClick={toggleSearch}
      >
        <BiSearchAlt2 className="text-white w-[35px] h-[35px] p-[7px]" />
      </div>
    </div>
  );
};

export default SearchInput;
