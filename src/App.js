import React from 'react';
import './styling.css';
import './card.js'
import './images/cardicon.png'
import sortby from './sortby'
import filter from './filter'
function App() {
  return (
    <div>
      <nav>
        <img src="images/cardicon.png" alt="tcg icon" />
        <input type="text" placeholder="search" />
      </nav>

      <div className="content-container">
        <div className="filter-container"> {filter}</div>
        <div className="sortby">{sortby}</div>
      </div>

      <div className="card-container"></div> 

    </div>
  );
}
export default App