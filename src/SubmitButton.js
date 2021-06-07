import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function SubmitButton({
  buttonText,
  queryData,
  loading,
  setLoading,
  eventDuration
}) {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isLate, setIsLate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://staging.ishayoga.eu/index.php/webinar-join-now/`,
        {
          method: 'POST',
          body: JSON.stringify({
            tokenId: queryData.tokenId,
            regId: queryData.regId
          })
        }
      );
      const res = await response.json();
      setLoading(false);
      console.log({ res });
      if (res.status === 'ERROR') {
        console.log('no match found for tokenId or regId');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkTime = (eventTime, duration) => {
    const currentTime = new Date();
    const minute = currentTime.getMinutes();
    const hour = currentTime.getHours();
    const day = currentTime.getDate();
    const month = currentTime.getMonth() + 1;
    const year = currentTime.getFullYear();

    const eventTimeArr = eventTime.split('-');
    const eventYear = parseFloat(eventTimeArr[0]);
    const eventMonth = parseFloat(eventTimeArr[1]);
    const eventDay = parseFloat(eventTimeArr[2]);
    const eventHour = parseFloat(eventTimeArr[3]);
    const eventMinute = parseFloat(eventTimeArr[4]);

    const currentDayMinutes = hour * 60 + minute;
    const eventDayMinutes = eventHour * 60 + eventMinute;

    if (eventYear === year && eventMonth === month && eventDay === day) {
      if (currentDayMinutes <= eventDayMinutes + duration) {
        setButtonEnabled(true);
      }

      if (currentDayMinutes >= eventDayMinutes + duration) {
        setButtonEnabled(false);
        setIsLate(true);
      }
    }
  };

  useEffect(() => {
    checkTime(queryData.t, eventDuration);
  }, []);

  useEffect(() => {
    if (Object.keys(queryData).length > 0) {
      let refreshInterval = setInterval(() => {
        checkTime(queryData.t, eventDuration);
      }, 30000);
      return () => {
        clearInterval(refreshInterval);
      };
    }
  }, [buttonEnabled]);

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
          onClick={() => setDisplayMessage(true)}
        />
        {displayMessage &&
          (isLate ? (
            <p className="error-message">This session has already ended</p>
          ) : (
            <p
              className="error-message"
              onClick={() => setDisplayMessage(false)}
            >
              You may only enter the session up to 30 minutes before the start
              time
            </p>
          ))}
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
      font-family: 'Merriweather', serif;
      font-weight: 600;
      opacity: ${(props) => (props.$buttonEnabled ? 1 : 0.7)};
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