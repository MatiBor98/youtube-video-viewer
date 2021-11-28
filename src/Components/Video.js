import React from "react";
import "./Video.css";

function selectVideo(videoIdObj, onVideoSelected) {
  onVideoSelected(videoIdObj.videoId);
}
function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "150px",
    position: "relative",
  };
  return _styles;
}
function constructVideoTitles(videosData, onVideoSelected) {
  console.log(videosData);
  return videosData.map(({ snippet, id }, index) => {
    return (
      <div
        className="video"
        key={index}
        onClick={() => selectVideo(id, onVideoSelected)}
      >
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        <p className="title">{snippet.title}</p>
      </div>
    );
  });
}
const Video = (props) => {
  return <>{constructVideoTitles(props.data, props.onVideoSelected)}</>;
};

export default Video;
