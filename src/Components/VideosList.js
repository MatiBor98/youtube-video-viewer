import React from "react";

import Video from "./Video";
import { Row } from "react-bootstrap";

const VideosList = (props) => {
  return (
    <div className="video-list">
      <Row className="mt-4" style={{ backgroundColor: "blue" }}>
        <h3
          style={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Related Videos
        </h3>
      </Row>
      <Row className="" style={{ backgroundColor: "red" }}>
        <Video data={props.data} onVideoSelected={props.onVideoSelected} />
      </Row>
    </div>
  );
};
//   return (
//     <div className="video-list">
//       <div style={{ padding: "20px 0" }}>
//         <h3
//           style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
//         >
//           Videos List
//         </h3>
//         <Video data={props.data} onVideoSelected={props.onVideoSelected} />
//       </div>
//     </div>
//   );
// };

export default VideosList;
