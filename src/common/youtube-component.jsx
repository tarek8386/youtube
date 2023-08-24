import React, { useState } from "react";
import Header from "./header-component";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./video-player";
import Suggestion from "./suggestion-component";
import axios from "axios";
function Youtube(props) {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [playingVideoId, setPlayingVideoId] = useState("");

  const searchedValue = (value) => {
    setSearchQuery(value);
  };
  const handleSearch = async (e) => {
    try {
      e.preventDefault();

      const baseUrl = "https://www.googleapis.com/youtube/v3/search";
      const key = "AIzaSyBXXEUq78s1TP95KqkkDKufwQuYCu4NBPA";
      const type = "video";
      const part = "snippet";

      const res = await axios.get(
        `${baseUrl}?key=${key}&type=${type}&part=${part}&q=${searchQuery}`
      );
      setVideos(res.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  const selectPlayingVideo = (id) => {
    setPlayingVideoId(id);
  };

  const video = videos.find((video) => video.id.videoId === playingVideoId);

  return (
    <div className="App">
      <Header searchedValue={searchedValue} handleSearch={handleSearch} />
      <div className="container mt-4">
        <div className="row">
          <Player
            playingVideoId={playingVideoId}
            title={video?.snippet?.title || ""}
            description={video?.snippet?.description || ""}
          />
          <Suggestion videos={videos} selectPlayingVideo={selectPlayingVideo} />
        </div>
      </div>
      <footer className="bg-dark text-white py-2 text-center">
        <p>&copy; 2023 YouTube Player</p>
      </footer>
    </div>
  );
}

export default Youtube;
