import React from "react";
import youtube from "./api/youtube";
import { Searchbar, Aside, Main } from "./Components";
import "./Styling/App/App.css";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    description: true,
  };

  handleSubmit = async (termFromSearchbar) => {
    // alert(termFromSearchbar);
    const res = await youtube.get("/search", {
      params: {
        q: termFromSearchbar,
      },
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
    });
  };

  handleVideoSelect = (clickedVideo) => {
    this.setState({
      selectedVideo: clickedVideo,
    });
  };

  render() {
    const { videos, selectedVideo, description } = this.state;
    return (
      <div className="container">
        <div className="app ">
          <div className="app__left">
            <Searchbar onFormSubmit={this.handleSubmit} />
            <Main video={selectedVideo} videos={videos} />
          </div>

          <div className="app__right">
            <Aside videos={videos} handleVideoSelect={this.handleVideoSelect} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
