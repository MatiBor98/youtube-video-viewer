import React from "react";

const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }
  return (
    <iframe
      title={videoId}
      className="video-iframe"
      src={`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
      width="100%"
      height="480px"
    />
  );
};

export default VideoPlayer;
