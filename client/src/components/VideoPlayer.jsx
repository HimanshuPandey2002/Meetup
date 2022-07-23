import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

function VideoPlayer() {
  const context = useContext(SocketContext);
  return (
    <div>
      <div className="video-container">
        {context.stream && (
          <div className="video-card">
            <h3 className="name">{context.name || 'Name'}</h3>
            <video playsInline ref={context.videoSrc} autoPlay />
          </div>
        )}
        {context.callAccepted && !context.callEnded && (
          <div className="video-card">
            <h3 className="name">{context.name}</h3>
            <video playsInline ref={context.userVideo} autoPlay />
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
