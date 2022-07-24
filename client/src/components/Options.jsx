import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";
import "./css/Options.css";
import phone from "../assets/basic-phone.svg";
import copy from "../assets/edit-copy.svg";
import close from "../assets/menu-coolicon.svg";

function Options({ children }) {
  const [idToCall, setIdToCall] = React.useState("");
  const context = useContext(SocketContext);

  return (
    <div className="Options">
      <div className="form" noValidate autoComplete="off">
        <div className="details">
          <input
            type="text"
            placeholder="Enter Username"
            value={context.name}
            onChange={(e) => context.setName(e.target.value)}
          ></input>
        </div>
        <div className="details">
          <input
            type="text"
            placeholder="Enter ID to call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          ></input>
          {context.callAccepted && !context.callEnded ? (
            <button id="end-call" onClick={context.endCall}>
              <img src={close} alt="" />
            </button>
          ) : (
            <button id="call" onClick={() => context.callUser(idToCall)}>
              Call
            </button>
          )}
        </div>
        <div className="id-sec">
          <p className="id">{context.me}</p>
          <CopyToClipboard text={context.me}>
            <button>
              <img src={copy} alt="" />
            </button>
          </CopyToClipboard>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Options;
