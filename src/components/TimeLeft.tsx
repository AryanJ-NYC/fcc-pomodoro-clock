import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';

// @ts-ignore
momentDurationFormatSetup(moment);

const TimeLeft: React.FC<Props> = ({
  handleResetButtonClick,
  handleStartStopClick,
  startStopButtonLabel,
  timeLeft,
  timerLabel,
}) => {
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
  return (
    <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-red-600 rounded-full">
      <p className="text-red-900 text-2xl" id="timer-label">
        {timerLabel}
      </p>
      <p className="font-clock text-4xl font-bold" id="time-left">
        {formattedTimeLeft}
      </p>
      <button
        className="text-red-400 font-semibold bg-green-900 px-4 py-2 rounded-lg"
        id="start_stop"
        onClick={handleStartStopClick}
      >
        {startStopButtonLabel}
      </button>
      <button
        className="border-2 text-green-900 rounded-lg border-green-900 border-solid px-3 py-2"
        id="reset"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
    </div>
  );
};

type Props = {
  handleResetButtonClick: () => void;
  handleStartStopClick: () => void;
  startStopButtonLabel: string;
  timeLeft: number;
  timerLabel: string;
};

export default TimeLeft;
