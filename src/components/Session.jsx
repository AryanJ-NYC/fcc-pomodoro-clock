import moment from 'moment';
import React from 'react';

const Session = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes();
  return (
    <div>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthInMinutes}</p>
      <button id="session-decrement" onClick={decrementSessionLengthByOneMinute}>
        -
      </button>
      <button id="session-increment" onClick={incrementSessionLengthByOneMinute}>
        +
      </button>
    </div>
  );
};

export default Session;
