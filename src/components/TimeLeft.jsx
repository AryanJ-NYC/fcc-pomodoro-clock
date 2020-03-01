import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React, { useState } from 'react';
import { useEffect } from 'react';

momentDurationFormatSetup(moment);

const TimeLeft = ({ breakLength, sessionLength }) => {
  const [currentSessionType, setCurrentSessionType] = useState('Session'); // 'Session' or 'Break'
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  // change timeLeft whenever sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      // if we are in started mode:
      // we want to stop the timer
      // clearInterval
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      // if we are in stopped mode:
      // decrement timeLeft by one every second (1000 ms)
      // to do this we'll use setInterval
      const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          // if session:
          if (currentSessionType === 'Session') {
            // switch to break
            setCurrentSessionType('Break');
            // setTimeLeft to breakLength
            setTimeLeft(breakLength);
          }
          // if break:
          else if (currentSessionType === 'Break') {
            // switch to session
            setCurrentSessionType('Session');
            // setTimeLeft to sessionLength
            setTimeLeft(sessionLength);
          }
        });
      }, 100); // TODO: turn back into 1000
      setIntervalId(newIntervalId);
    }
  };

  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
  return (
    <div>
      <p id="timer-label">{currentSessionType}</p>
      <p id="time-left">{formattedTimeLeft}</p>
      <button id="start_stop" onClick={handleStartStopClick}>
        {isStarted ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default TimeLeft;
