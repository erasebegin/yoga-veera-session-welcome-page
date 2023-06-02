import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { toMilliseconds } from '../utilities/convertTime';
import pageText from '../data/text';

export default function Timer({
  eventTime,
  timeBeforeEnableSession,
  eventDuration,
  language
}) {
  const currentTime = Date.now();

  const initialTimeDifference = eventTime - currentTime;

  const [timeDifference, setTimeDifference] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeDifference(initialTimeDifference);
  }, [eventTime]);

  useEffect(() => {
    let refreshInterval = setInterval(() => {
      setTimeDifference(timeDifference - 1000);
    }, 1000);

    return () => {
      clearInterval(refreshInterval);
    };
  });

  useEffect(() => {
    if (eventTime && timeDifference) {
      setLoading(false);
    }
  }, [eventTime]);

  // add a leading 0 so that numbers always appear in 00 format (e.g. 01, 02, 03)
  function addZero(num) {
    if (num < 10) {
      return `0${num.toString()}`;
    }

    return num;
  }

  const secondsUntil = Math.floor(timeDifference / 1000);
  const secondsRemainder = secondsUntil % 60;
  const minutesUntil = Math.floor(secondsUntil / 60);
  const minutesRemainder = minutesUntil % 60;
  const hoursUntil = Math.floor(minutesUntil / 60);
  const hoursRemainder = hoursUntil % 24;
  const daysUntil = Math.floor(hoursUntil / 24);

  if (loading) {
    return <ClipLoader color="white" />;
  }

  if (timeDifference + toMilliseconds(eventDuration) < 0) {
    return <p>This session is already finished</p>;
  }

  if (timeDifference <= 0) {
    return <p>This session has already started</p>;
  }

  return (
    <StyledTimer>
      <p>
        {pageText[language]
          ? pageText[language].timer.beginsIn
          : pageText.en.timer.beginsIn}
      </p>
      <p>
        <span>{`${addZero(daysUntil)}:${addZero(hoursRemainder)}:${addZero(
          minutesRemainder
        )}:${addZero(secondsRemainder)}`}</span>
      </p>
      <p
        dangerouslySetInnerHTML={{
          __html: pageText[language]
            ? pageText[language].timer.enterBefore(timeBeforeEnableSession)
            : pageText.en.timer.enterBefore(timeBeforeEnableSession)
        }}
      />
    </StyledTimer>
  );
}

const StyledTimer = styled.div`
  p {
    max-width: 350px;
  }

  span {
    color: var(--goldBright);
  }
`;
