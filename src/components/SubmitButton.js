import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toMilliseconds, parseTzOffset } from '../utilities/convertTime';
import Timer from './Timer';

export default function SubmitButton({
  buttonText,
  queryData,
  setLoading,
  eventDuration,
  timeZone,
  setNoUrl,
  setModalOpen,
  setIsLate,
  setIsEarly,
  timezoneData,
  configData,
  showTimer
}) {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [timezoneOffset, setTimezoneOffset] = useState(0);
  const [eventTimeConverted, setEventTimeConverted] = useState(0);

  const { tokenId, regId, t, tzOffset, lang } = queryData || {};

  console.log({queryData})

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(configData.joinSessionUrl, {
        method: 'POST',
        body: JSON.stringify({
          tokenId: tokenId,
          regId: regId
        })
      });
      const res = await response.json();
      if (res[0].redirect_url) {
        if (res[0].redirect_url.match(/^[http]/g)) {
          window.location = res[0].redirect_url;
        } else {
          window.location = 'https://' + res[0].redirect_url;
        }
      } else if (res.status === 'ERROR') {
        setNoUrl(true);
        setModalOpen(true);
        console.error('no match found for tokenId or regId');
      } else {
        setNoUrl(true);
        setModalOpen(true);
      }
      setLoading(false);
    } catch (err) {
      setNoUrl(true);
      setModalOpen(true);
      console.error(err);
    }
  };

  function convertedUrlTime() {
    // split event time into array
    const eventTimeArr = t.split('-');
    // rejoin array into ISO compatible string, adding an ISO compatible timezone offset
    const eventTimeString = `${eventTimeArr[0]}-${eventTimeArr[1]}-${eventTimeArr[2]}T${eventTimeArr[3]}:${eventTimeArr[4]}:00${timezoneOffset}`;
    // use string to create a new date object and convert that object to a number with getTime()
    const eventTime = new Date(eventTimeString).getTime();
    // set eventTime in state so that Timer and checkTime can use it
    setEventTimeConverted(eventTime);

    // get user's system time as number
    const systemTime = Date.now();

    return systemTime;
  }

  // fetches the amount of time a user is allowed to enter a session before it begins
  const timeBeforeSession = parseInt(configData.timeBeforeEnableSessionMinutes);

  function checkTime() {
    const currentTime = convertedUrlTime();

    // ensures that this entire function can be overridden by changing the value to 0 in the config file
    if (timeBeforeSession === 0) {
      setButtonEnabled(true);
      return;
    }

    // useful log for debugging
    // console.log({
    //   eventTime: { num: eventTimeConverted, txt: new Date(eventTimeConverted) },
    //   currentTime: { num: currentTime, txt: new Date(currentTime) }
    // });

    // do not run subsequent code if following variables are not yet available
    if (!currentTime || !eventTimeConverted || !timeBeforeSession) {
      return;
    }

    if (eventTimeConverted - toMilliseconds(timeBeforeSession) > currentTime) {
      // if user is early
      setIsEarly(true);
      setButtonEnabled(false);
    } else if (
      eventTimeConverted + toMilliseconds(eventDuration) <
      currentTime
    ) {
      // if user is late
      setIsLate(true);
      setButtonEnabled(false);
    } else {
      // else, let them enter
      setButtonEnabled(true);
    }
  }

  useEffect(() => {
    if (tzOffset) {
      setTimezoneOffset(parseTzOffset(tzOffset));
    } else if (timezoneData) {
      setTimezoneOffset(parseTzOffset(timezoneData[timeZone]));
    }
  }, [queryData, timezoneData]);

  useEffect(() => {
    let refreshInterval = setInterval(() => {
      checkTime();
    }, 1000);

    return () => {
      clearInterval(refreshInterval);
    };
  });

  return (
    <FormContainer $buttonEnabled={buttonEnabled}>
      <form onSubmit={handleSubmit}>
        <button
          className="button-submit"
          type="submit"
          disabled={!buttonEnabled}
        >
          {buttonText}
        </button>
        <button
          className="button-blocker"
          type="button"
          onClick={() => setModalOpen(true)}
        />
      </form>
      {showTimer && (
        <Timer
          timeBeforeEnableSession={configData.timeBeforeEnableSessionMinutes}
          eventTime={eventTimeConverted}
          eventDuration={eventDuration}
          language={lang}
        />
      )}
    </FormContainer>
  );
}

const FormContainer = styled.div`
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .button-submit {
      background: ${(props) =>
        props.$buttonEnabled ? 'var(--orange)' : '#ebebeb'};
      color: ${(props) =>
        props.$buttonEnabled ? 'white' : 'var(--beigeDarker)'};
      border: none;
      padding: 0.5rem 2rem;
      margin-bottom: 1rem;
      border-radius: 5px;
      font-weight: 600;
      font-size: 1.3rem;
      opacity: ${(props) => (props.$buttonEnabled ? 1 : 0.7)};
      cursor: pointer;
    }

    .button-blocker {
      display: ${(props) => (props.$buttonEnabled ? 'none' : 'initial')};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 130px;
      height: 35px;
      background: none;
      border: none;
    }

    .error-message {
      color: var(--goldLight);
      font-weight: 600;
      max-width: 300px;
      text-align: center;
    }
  }
`;
