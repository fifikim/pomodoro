import React from "react";
import ProgressBar from "./ProgressBar";

const ActiveSession = ({session}) => {
  return (
    <>
      {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">
            {session?.label} for 25:00 minutes
          </h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {session?.timeRemaining} remaining
          </p>
        </div>
      </div>
      <ProgressBar />
    </>
  );
}

export default ActiveSession;