import React, { Component } from "react";
import "../Styling/Searchbar/Searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";

class Searchbar extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) =>
    this.setState({
      searchTerm: e.target.value,
    });

  handleSubmit = (e) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    e.preventDefault();

    onFormSubmit(searchTerm);
  };

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar__box">
          <AiOutlineSearch className="searchbar__icon" />
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbar;
