import FilterDropdown from "./FilterDropdown";
import { IoFunnelOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Filters = () => {
    const typeOptions = ["All Types", "Bug", "Suggestions", "Complaint", "Praise"];
    const ratingOptions = ["All Ratings", "5 stars", "4 stars", "3 stars", "2 stars", "1 star"];
    const statusOptions = ["All Status", "Pending", "Reviewed"];

    return (
        <div className="filters">
            <div className="search-wrapper">
             <CiSearch className="search-icon" />
             <input type='text' className="search-input" placeholder='Search feedback...' />
            </div>
            <FilterDropdown options={typeOptions}></FilterDropdown>
            <FilterDropdown options={ratingOptions}></FilterDropdown>
            <FilterDropdown options={statusOptions}></FilterDropdown>
            <IoFunnelOutline /> <span>5 results</span>
        </div>
    )
}

export default Filters;