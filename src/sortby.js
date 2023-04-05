function sortby() {
    return (
    <div className="dropdown" data-dropdown>
        <button className="link" data-dropdown-button>Sort By</button>
        <div className="dropdown-menu">
            <select>
                <option value="mostpopular">Most Popular</option>
                <option value="lowtohigh">Price low to high</option>
                <option value="hightolow">Price high to low</option>
                <option value="ascend">Name Ascending</option>
                <option value="descend">Name Descending</option>
            </select>
        </div>
    </div>
    )
}

export default sortby