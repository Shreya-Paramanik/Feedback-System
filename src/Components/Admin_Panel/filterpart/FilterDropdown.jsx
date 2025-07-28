const FilterDropdown = ({options=[], label}) => {
    return(
        <select className="filter-select">
            {options.map((option, index) => (
                <option key={index}>{option}</option>
            ))}
        </select>
    );
}

export default FilterDropdown;