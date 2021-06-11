import { useEffect, useState } from "react";
import styled from "styled-components";
import getEventTimeZoneOffset from "../utilities/getEventTimeZoneOffset";
import toMiliseconds from "../utilities/convertMiliseconds";

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
}) {
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://staging.ishayoga.eu/index.php/webinar-join-now/`,
        {
          method: "POST",
          body: JSON.stringify({
            tokenId: queryData.tokenId,
            regId: queryData.regId,
          }),
        }
      );
      const res = await response.json();
      if (res[0].redirect_url) {
        window.location = res[0].redirect_url;
      } else {
        setNoUrl(true);
        setModalOpen(true);
      }
      setLoading(false);
      if (res.status === "ERROR") {
        console.log("no match found for tokenId or regId");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkClassStatus = () => {};

  const checkTime = (t, duration) => {
    // convert date and time url param to ISO string:
    const eventTimeArr = t.split("-");
    const eventDate = eventTimeArr.slice(0, 3).join("-");
    const eventTime = eventTimeArr.slice(3, 5).join(":");
    const eventTimeConverted = new Date(eventDate + "T" + eventTime);
    // adjust time to UTC0
    const eventTimeAdjusted =
      eventTimeConverted - toMiliseconds(getEventTimeZoneOffset(timeZone));
    // get system time
    const currentTime = new Date();
    // adjust to UTC0
    const currentTimeAdjusted =
      currentTime.getTime() + toMiliseconds(currentTime.getTimezoneOffset());

    if (currentTime > eventTimeAdjusted - toMiliseconds(30)) {
      setButtonEnabled(true);
    }

    if (currentTimeAdjusted > eventTimeAdjusted + toMiliseconds(duration)) {
      setIsLate(true);
      setButtonEnabled(false);
    } else {
      setIsEarly(true);
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
        props.$buttonEnabled ? "var(--orange)" : "#ebebeb"};
      color: ${(props) =>
        props.$buttonEnabled ? "white" : "var(--beigeDarker)"};
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
      display: ${(props) => (props.$buttonEnabled ? "none" : "initial")};
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
