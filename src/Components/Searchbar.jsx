import React, { Component } from "react";
import "../Styling/Searchbar/Searchbar.css";

class Searchbar extends Component {
  state = {
    searchTerm: "",
  };
  render() {
    return (
      <div className="searchbar">
        <div className="searchbar__box">
          <form action="">
            <input type="text" placeholder="Search..." />
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbar;
