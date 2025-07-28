import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import { IoFunnelOutline } from "react-icons/io5";

const Filters = () => {
    const typeOptions = ["All Types", "Bug", "Suggestions", "Complaint", "Praise"];
    const ratingOptions = ["All Ratings", "5 stars", "4 stars", "3 stars", "2 stars", "1 star"];
    const statusOptions = ["All Status", "Pending", "Reviewed"];

    return (
        <div className="filters">
            <SearchBar></SearchBar>
            <FilterDropdown options={typeOptions}></FilterDropdown>
            <FilterDropdown options={ratingOptions}></FilterDropdown>
            <FilterDropdown options={statusOptions}></FilterDropdown>
            <IoFunnelOutline /> <span>5 results</span>
        </div>
    )
}

export default Filters;