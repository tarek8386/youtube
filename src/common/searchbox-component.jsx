function Searchbox(props) {
    return (
        <input
            onChange={(e) => props.searchedValue(e.target.value)}
            className="form-control me-2"
            type="search"
            name="search"
            aria-label="Search"
        />
    );
}
export default Searchbox;