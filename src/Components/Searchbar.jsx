import React, { Component } from "react";
import "../Styling/Searchbar/Searchbar.css";

class Searchbar extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) =>
    this.setState({
      searchTerm: e.target.value,
    });

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
  };

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar__box">
          <form action="">
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
