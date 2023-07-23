import { BiSearchAlt2 } from "react-icons/bi";
const SearchInput = () => {
  return (
    <div className="search-section">
 
        <input type="search" placeholder="Enter to search" />

          <div className="search-icon  ">
            <BiSearchAlt2 />
          </div>
    
   
    </div>
  );
};

export default SearchInput;
