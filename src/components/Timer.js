import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Timer({ eventTime, timeBeforeEnableSession }) {
  const currentTime = Date.now();

  const initialTimeDifference = eventTime - currentTime;

  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    setTimeDifference(initialTimeDifference);
  }, [eventTime]);

  useEffect(() => {
    let refreshInterval = setInterval(() => {
      setTimeDifference(timeDifference - 60000);
    }, 60000);

    return () => {
      clearInterval(refreshInterval);
    };
  });

  const daysUntil = Math.round(timeDifference / 1000 / 60 / 60 / 24);
  const hoursUntil = Math.round(timeDifference / 1000 / 60 / 60);
  const hoursRemainder = hoursUntil % 24;
  const minutesUntil = Math.round(timeDifference / 1000 / 60);
  const minutesRemainder = minutesUntil % 60;
  const secondsUntil = Math.round(timeDifference / 1000);
  const secondsRemainder = secondsUntil % 1000;

  return (
    <StyledTimer>
      <p>Event begins in</p>
      <p>
        <Span>{`${daysUntil} day${
          daysUntil > 1 ? 's' : ''
        }, ${hoursRemainder} hour${hoursRemainder > 1 ? 's' : ''}
          and ${minutesRemainder} minute${
          minutesRemainder > 1 ? 's' : ''
        }.`}</Span>
      </p>
      <p>
        You may enter <Span>{timeBeforeEnableSession} minutes</Span> before{' '}
        <br />
        the sessions begins.
      </p>
    </StyledTimer>
  );
}

const StyledTimer = styled.div``;

const Span = styled.span`
  color: var(--goldBright);
`;
