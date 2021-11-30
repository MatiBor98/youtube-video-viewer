import React from "react";
import { useState } from "react";

const VideoContext = React.createContext({
  foundVideo: { relatedVideos: [], selectedVideo: null },
  setNewVideo: (video) => {},
});

export const VideoContextProvider = (props) => {
  const [foundVideo, setNewVideo] = useState({
    relatedVideos: [],
    selectedVideo: null,
  });
  return (
    <VideoContext.Provider value={{ foundVideo, setNewVideo }}>
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
