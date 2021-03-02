import React from "react";
import youtube from "./api/youtube";
import { Searchbar, Aside, Main } from "./Components";
import "./Styling/App/App.css";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSubmit = async (termFromSearchbar) => {
    // alert(termFromSearchbar);
    const res = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        q: termFromSearchbar,
      },
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
    });
  };

  handleVideoSelect = (clickedVideoId) => {
    const {
      id: { videoId },
    } = this.state.videos;
  };
  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="container">
        <div className="app ">
          <div className="app__left">
            {/* //searchbar */}
            <Searchbar onFormSubmit={this.handleSubmit} />
            {/* //mainvideo */}
            <Main video={selectedVideo} videos={videos} />
          </div>
          <div className="app__right">
            {/* aside-video results */}
            <Aside videos={videos} handleVideoSelect={this.handleVideoSelect} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
