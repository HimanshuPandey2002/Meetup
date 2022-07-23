import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

function Options({ children }) {
  const [idToCall, setIdToCall] = React.useState("");
  const context = useContext(SocketContext);

  return (
    <div>
      <div noValidate autoComplete="off">
        <div className="details">
          <h6>Account Info:</h6>
          <input
            type="text"
            placeholder="Username"
            value={context.name}
            onChange={(e) => context.setName(e.target.value)}
          ></input>
          <CopyToClipboard text={context.me}>
            <button>copy id</button>
          </CopyToClipboard>
        </div>
        <div className="details">
          <h6>Make a call:</h6>
          <input
            type="text"
            placeholder="Enter ID to call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          ></input>
          {context.callAccepted && !context.callEnded ? (
            <button onClick={context.endCall}>Hang up</button>
          ) : (
            <button onClick={() => context.callUser(idToCall)}>Call</button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Options;
