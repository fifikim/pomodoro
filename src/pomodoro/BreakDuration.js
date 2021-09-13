import React from 'react';
import { minutesToDuration } from '../utils/duration';

const BreakDuration = ({session, breakDuration, onIncreaseBreak, onDecreaseBreak}) => {
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* DONE: Update this text to display the current break session duration */}
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            {/* DONE: Implement decreasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={onDecreaseBreak}
              disabled={session != null}
            >
              <span className="oi oi-minus" />
            </button>
            {/* DONE: Implement increasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={onIncreaseBreak}
              disabled={session !== null}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakDuration;