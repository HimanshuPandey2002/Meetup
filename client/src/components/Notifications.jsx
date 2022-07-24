import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "./css/Notifications.css";

function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <div className="notifications">
      {call.isRecievedCall && !callAccepted && (
        <div>
          <p className="answer">{call.name} is calling</p>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </div>
  );
}

export default Notifications;
