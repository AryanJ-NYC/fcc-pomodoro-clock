import moment from 'moment';
import React from 'react';
import { useState } from 'react';

const Session = () => {
  const [sessionLength, setSessionLength] = useState(60 * 25);

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(sessionLength + 60);
  };

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
