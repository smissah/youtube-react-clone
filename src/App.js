import react, { Component } from "react";
import youtube from "./api/youtube";
import { Searchbar, Aside, Main } from "./Components";

import "./Styling/App/App.css";
class App extends Component {
  state = {};

  handleSubmit = (e) => {
    console.log("submitted" + e);
  };
  render() {
    return (
      <div className="container">
        <div className="app ">
          <div className="app__left">
            {/* //searchbar */}
            <Searchbar onFormSubmit={this.handleSubmit} />
            {/* //mainvideo */}
            <Main />
          </div>
          <div className="app__right">
            {/* aside-video results */}
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
