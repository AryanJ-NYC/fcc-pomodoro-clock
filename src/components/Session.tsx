import moment from 'moment';
import React from 'react';
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionTime,
  PlusMinusButtonContainer,
  PlusMinusButton,
} from '../ui/BreakSessionUi';

const Session: React.FC<Props> = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes();
  return (
    <BreakSessionContainer>
      <BreakSessionLabel id="session-label">Session</BreakSessionLabel>
      <BreakSessionTime id="session-length">{sessionLengthInMinutes}</BreakSessionTime>
      <PlusMinusButtonContainer>
        <PlusMinusButton id="session-decrement" onClick={decrementSessionLengthByOneMinute}>
          -
        </PlusMinusButton>
        <PlusMinusButton id="session-increment" onClick={incrementSessionLengthByOneMinute}>
          +
        </PlusMinusButton>
      </PlusMinusButtonContainer>
    </BreakSessionContainer>
  );
};

type Props = {
  sessionLength: number;
  decrementSessionLengthByOneMinute: () => void;
  incrementSessionLengthByOneMinute: () => void;
};

export default Session;
