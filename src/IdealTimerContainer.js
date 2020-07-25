import React, { useRef, useState } from "react";
import IdealTimer from "react-idle-timer";
import Model from "react-modal";

function IdealTimerContainer() {
  const idealTimerRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const sessionTimeoutRef = useRef(null);
  const onIdeal = () => {
    console.log("onIDeal");
    // setIsLoggedIn(false);
    setIsModelOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };

  const logOut = () => {
    console.log("logout");
    setIsLoggedIn(false);
    setIsModelOpen(false);
  };

  const stayActive = () => {
    setIsModelOpen(false);
    setIsLoggedIn(true);
    console.log("user is active");
  };

  return (
    <>
      {isLoggedIn ? <h2>Hello Ashok</h2> : <h2>you are loggedOut</h2>}
      <IdealTimer
        ref={idealTimerRef}
        timeout={3000}
        onIdle={onIdeal}
      ></IdealTimer>
      <Model isOpen={isModelOpen}>
        <h2>You have been ideal for a while</h2>
        <p>you will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep Me signed in</button>
        </div>
      </Model>
    </>
  );
}

export default IdealTimerContainer;
