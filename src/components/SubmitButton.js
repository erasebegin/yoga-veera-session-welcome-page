import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toMilliseconds } from '../utilities/convertTime';
import useJsonData from '../hooks/useJsonData';

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
  dataPath
}) {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  // for testing on localhost remove /events/join from json data path
  const { data: configData } = useJsonData(`/events/join/resources/data/config.json`);
  const { data: timezoneData } = useJsonData(`/events/join/resources/data/timezones.json`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(configData.joinSessionUrl, {
        method: 'POST',
        body: JSON.stringify({
          tokenId: queryData.tokenId,
          regId: queryData.regId
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
        console.log('no match found for tokenId or regId');
      } else {
        setNoUrl(true);
        setModalOpen(true);
      }
      setLoading(false);
    } catch (err) {
      setNoUrl(true);
      setModalOpen(true);
      console.log(err);
    }
  };

  const parseTzOffset = (tzo) => {
    let output = tzo;

    if (tzo.startsWith(' ')) {
      const sliced = tzo.slice(1, tzo.length);
      output = '+' + sliced;
    }

    return output;
  };

  // looks for UTC offset in URL params, either in tzOffset (new system) or tz (old system)
  const timezoneOffset = parseTzOffset(queryData?.tzOffset) || timezoneData[timeZone];
  console.log('tzo:', parseTzOffset(queryData.tzOffset));

  const checkTime = (t, duration) => {
    // fetches the amount of time a user is allowed to enter a session before it begins
    const timeBeforeSession = parseInt(
      configData.timeBeforeEnableSessionMinutes
    );

    // ensures that this entire function can be overridden by changing the value to 0 in the config file
    if (timeBeforeSession === 0) {
      setButtonEnabled(true);
      return;
    }
    console.log('tz', timezoneOffset);
    // split event time into array
    const eventTimeArr = t.split('-');
    // rejoin array into ISO compatible string, adding and ISO compatible timezone offset
    const eventTimeString = `${eventTimeArr[0]}-${eventTimeArr[1]}-${eventTimeArr[2]}T${eventTimeArr[3]}:${eventTimeArr[4]}:00${timezoneOffset}`;
    // use string to create a new date object and convert that object to a number with getTime()
    const eventTime = new Date(eventTimeString).getTime();

    // get user's system time as number
    const currentTime = Date.now();

    if (eventTime - toMilliseconds(timeBeforeSession) > currentTime) {
      // if user is early
      setIsEarly(true);
      setButtonEnabled(false);
    } else if (eventTime + toMilliseconds(duration) < currentTime) {
      // if user is late
      setIsLate(true);
      setButtonEnabled(false);
    } else {
      // else, let them enter
      setButtonEnabled(true);
    }

    // useful log for debugging
    console.log({
      eventTime: { num: eventTime, txt: new Date(eventTime) },
      currentTime: { num: currentTime, txt: new Date(currentTime) }
    });
  };

  useEffect(() => {
    checkTime(queryData?.t, eventDuration);
  }, [configData, timezoneOffset]);

  // useEffect(() => {
  //   if (Object.keys(queryData).length > 0) {
  //     let refreshInterval = setInterval(() => {
  //       checkTime(queryData.t, eventDuration);
  //     }, 60000);
  //     return () => {
  //       clearInterval(refreshInterval);
  //     };
  //   }
  // }, []);

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
