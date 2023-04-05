function filter() {
    return (
    <div className="filter">
        <div className="dropdown" data-dropdown>
          <button className="link" data-dropdown-button>Type</button>
          <div className="dropdown-menu">
            Dropdown Content
          </div>
        </div>
        <div className="dropdown" data-dropdown>
          <button className="link" data-dropdown-button>Price</button>
          <div className="dropdown-menu">
            Dropdown Content
          </div>
        </div>
        <div className="dropdown" data-dropdown>
          <button className="link" data-dropdown-button>Collection</button>
          <div className="dropdown-menu">
            Dropdown Content
          </div>
        </div>
        <div className="dropdown" data-dropdown>
          <button className="link" data-dropdown-button>Series</button>
          <div className="dropdown-menu">
            Dropdown Content
          </div>
        </div>
        <div className="dropdown" data-dropdown>
          <button className="link" data-dropdown-button>Rarity</button>
          <div className="dropdown-menu">
            Dropdown Content
          </div>
        </div>
    </div>
    )
}
export default filter