import { CiSearch } from "react-icons/ci";
import './SearchBar.css';

const SearchBar = () => {
    return(
        <div className="search-wrapper">
            <CiSearch className="search-icon" />
            <input type='text' className="search-input" placeholder='Search feedback...' />
        </div>
    );
}

export default SearchBar;