import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link, Element } from "react-scroll";
// STYLES
import "./global.css";
import styled, { css } from "styled-components";
// DATA
import PAGE_TEXT from "./data/text2";
// COMPONENTS
import SubmitButton from "./components/SubmitButton";
import Modal from "./components/Modal";
// UTILITIES/HOOKS
import getEventType from "./utilities/getEventType";
import useJsonData from "./hooks/useJsonData";
import queryParamData from "./utilities/getQueryParamData";
// IMAGES
import separator from "./images/divider-orange.svg";
import feathers from "./images/feathers.svg";
import defaultImageDesktop from "./images/main-banner.png";
import defaultImageMobile from "./images/main-banner-mobile.png";

// test params:
// http://localhost:3000/?region=EU&lang=en&eventType=Live%20Webinar:%20Shakti%20Chalana%20Kriya%20Review&eventTitle=Live%20Webinar:%20Shakti%20Chalana%20Kriya%20Review&eventId=2990&tokenId=d6b4ef7b45b6bfbc6a51fcd9f1b53f22&regId=568&t=2022-11-03-10-00&tz=GMT&tzOffset=+00:00

function App() {
  const queryData = queryParamData();

  const { tz, tzOffset, t, lang, eventTitle = "" } = queryData;

  // fetch json data
  // for testing on localhost add REACT_APP_DEVELOPMENT="true" to .env in project root
  const urlPrefix = process.env.REACT_APP_DEVELOPMENT ? "" : "/events/join";
  const {
    data: eventData,
    loading: eventDataLoading,
    error: jsonError,
  } = useJsonData(`
  ${urlPrefix}/resources/data/events.json`);
  const { data: configData } = useJsonData(`
  ${urlPrefix}/resources/data/config.json`);
  const { data: timezoneData, loading: timezoneLoading } = useJsonData(
    `${urlPrefix}/resources/data/timezones.json`
  );

  const text = PAGE_TEXT[lang] || PAGE_TEXT.en || {};
  const event =
    eventData[getEventType(eventTitle, eventData)] || eventData.wellbeing;
  const quote =
    text.quotes[getEventType(eventTitle, eventData)] ||
    text.quotes["wellbeing"];
  const { h1, h3, h4, p5, btn1, btn2, btn4 } = text || {};

  const [loading, setLoading] = useState(false);
  const [noUrl, setNoUrl] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLate, setIsLate] = useState(false);
  const [isEarly, setIsEarly] = useState(false);

  if (Object.keys(queryData).length <= 0) {
    return <p style={{ paddingLeft: "3rem" }}>Please provide query params</p>;
  }

  if (!event) {
    return (
      <p style={{ paddingLeft: "3rem" }}>This is not a recognised event type</p>
    );
  }

  if (jsonError) {
    console.error("Could not retrieve data from events.json");
    return <p style={{ paddingLeft: "3rem" }}>Could not retrieve event data</p>;
  }

  const loadingSpinnerShow = css`
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
  `;

  const loadingSpinnerHide = css`
    display: none;
  `;

  if (timezoneLoading || eventDataLoading) {
    return <ClipLoader css={loadingSpinnerShow} />;
  }

  return (
    <Container $loading={loading}>
      <ClipLoader css={loading ? loadingSpinnerShow : loadingSpinnerHide} />
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        noUrl={noUrl}
        isLate={isLate}
        isEarly={isEarly}
        text={text}
        eventTime={t}
        timeZone={tz}
        tzOffset={tzOffset}
      />
      <main>
        <header>
          <div className="overlay" />
          <div className="banner-content">
            <h1>{eventTitle}</h1>
            <h2>{h1}</h2>
            <img
              src={separator}
              alt="leaf print with horizonal black lines (separator)"
            />
            <SubmitButton
              queryData={queryData}
              buttonText={btn1}
              loading={loading}
              setLoading={setLoading}
              eventDuration={parseInt(event.duration)}
              timeZone={tz}
              setNoUrl={setNoUrl}
              setModalOpen={setModalOpen}
              isLate={isLate}
              setIsLate={setIsLate}
              setIsEarly={setIsEarly}
              timezoneData={timezoneData}
              configData={configData}
              showTimer
            />
          </div>
          <img
            src={event?.images?.desktop || defaultImageDesktop}
            className="header-image desktop"
            alt={event?.images?.description || ""}
          />
          <img
            src={event?.images?.mobile || defaultImageMobile}
            className="header-image mobile"
            alt={event?.images?.description || ""}
          />
        </header>
        <div className="navbar">
          <Link to="webinar-guidelines" offset={-50} smooth>
            {btn2}
          </Link>
        </div>
        <div className="feather-quote">
          <img src={feathers} alt="feathers" className="feathers" />
          <blockquote>“{quote}” - Sadhguru</blockquote>
        </div>
        <div className="separator">
          <img
            src={separator}
            alt="leaf print with horizonal black lines (separator)"
          />
        </div>
        <Element className="main-content" name="webinar-guidelines">
          <h2>{h3}</h2>
          <ul className="instructions">
            <li>{text.ul[0](event.duration || "45")}</li>
            <li>{text.ul[1]}</li>
            <li>{text.ul[2]}</li>
            <li>{text.ul[3](event.eatBeforeDuration || "1.5")}</li>
            <li>{text.ul[4]}</li>
            <li>{text.ul[5]}</li>
          </ul>
          <div className="button-container">
            <SubmitButton
              queryData={queryData}
              buttonText={btn1}
              loading={loading}
              setLoading={setLoading}
              eventDuration={parseInt(event.duration)}
              timeZone={tz}
              setNoUrl={setNoUrl}
              setModalOpen={setModalOpen}
              isLate={isLate}
              setIsLate={setIsLate}
              setIsEarly={setIsEarly}
              timezoneData={timezoneData}
              configData={configData}
            />
            <p>{p5}</p>
          </div>
          <div className="separator">
            <img
              src={separator}
              alt="leaf print with horizonal black lines (separator)"
            />
          </div>
          <section className="bottom-section">
            <h2>{h4}</h2>
            <a
              href={configData.supportUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-support">{btn4}</button>
            </a>
          </section>
        </Element>
      </main>
    </Container>
  );
}

const Container = styled.div`
  background: #f7f1e3;

  .loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  header {
    position: relative;

    .banner-content {
      position: absolute;
      top: 50%;
      left: 25%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      text-align: center;

      @media (max-width: 700px) {
        padding: 0;
        top: unset;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -10%);
      }

      h1 {
        font-family: "Fira Sans", sans-serif;
        font-weight: 600;
        letter-spacing: 0.05rem;
        font-size: 2.5rem;
        margin: 0;
        margin-bottom: 1.5rem;
        line-height: 3.1rem;
        max-width: 500px;

        @media (max-width: 500px) {
          font-size: 1.5rem;
          line-height: 2.5rem;
        }

        @media (max-width: 800px) {
          font-size: 2rem;
        }
      }

      h2 {
        font-family: "Fedra Sans", serif;
        font-weight: 300;
        font-size: 2rem;

        @media (max-width: 800px) {
          font-size: 1.7rem;
        }
      }
      // separator
      img {
        margin: 1rem 0;
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 99.5%;
      background: rgba(0, 0, 0, 0.2);

      @media (min-width: 700px) {
        display: none;
      }
    }

    .header-image {
      width: 100%;
      display: initial;

      &.mobile {
        display: none;
      }

      @media (max-width: 700px) {
        &.desktop {
          display: none;
        }
        &.mobile {
          display: initial;
        }
      }
    }
  }

  .navbar {
    display: flex;
    justify-content: center;
    background: var(--brownLight);
    margin-top: -0.3rem;
    height: 100%;
    padding: 1rem;

    a {
      padding: 0.5rem;
      border: 1px solid var(--gold);
      border-radius: 5px;
      text-decoration: none;
      color: var(--gold);
      text-transform: uppercase;

      &:first-child {
        margin-right: 1rem;
      }

      &:hover {
        background: rgba(43, 37, 30, 0.08);
      }
    }
  }

  main {
    max-width: 1400px;
    color: var(--greyDark);
    margin: auto;
    padding-bottom: 4rem;
    background: var(--offWhite);
    opacity: ${(props) => (props.$loading ? 0.5 : 1)};

    .feather-quote {
      position: relative;
      padding: 1rem;

      .feathers {
        max-width: 60px;
        position: absolute;
        top: 0;
        left: 100px;

        @media (max-width: 1200px) {
          display: none;
        }
      }

      blockquote {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--goldLight);
        text-align: center;
        max-width: 800px;
        margin: 2rem auto;
        font-style: italic;
        line-height: 2.2rem;
      }

      .subheading {
        font-size: 1.5rem;
        text-align: center;
        padding: 0 3rem;
        max-width: 700px;
        margin: 1rem auto;

        @media (max-width: 700px) {
          padding: 0;
          font-size: 1.3rem;
        }
      }
    }

    .main-content {
      padding: 0 2rem;
      max-width: 1000px;
      margin: auto;

      h2 {
        color: var(--blueDarker);
        margin-bottom: 2.5rem;
        font-size: 1.9rem;

        @media (max-width: 700px) {
          font-size: 1.4rem;
        }
      }

      li {
        list-style: disc;
        font-size: 1.2rem;
        margin-bottom: 2rem;
        line-height: 1.75rem;

        @media (max-width: 700px) {
          font-size: 1.1rem;
        }
      }
    }

    h1 {
      font-family: "Merriweather", serif;
      margin-bottom: 3rem;
      margin-left: 0.5rem;
    }

    .button-container {
      text-align: center;
      font-size: 1.5rem;
      margin-top: 5rem;

      p {
        margin-top: 1rem;
        font-size: 1.3rem;
        line-height: 1.75rem;

        @media (max-width: 700px) {
          font-size: 1.1rem;
        }
      }
    }

    .button-support {
      background: var(--orange);
      color: white;
      border: none;
      padding: 0.5rem 2rem;
      margin-bottom: 1rem;
      border-radius: 5px;
      font-weight: 600;
      font-size: 1.3rem;
      cursor: pointer;

      &:focus {
        outline-color: var(--goldLight);
      }

      &:active {
        outline-color: var(--goldLight);
      }
    }

    .separator {
      display: flex;
      justify-content: center;
      padding: 1rem 0;

      img {
        max-height: 30px;
        margin: 3rem 0;
      }
    }

    .bottom-section {
      text-align: center;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }

      a {
        font-size: 1.3rem;
        color: black;
        text-decoration: none;

        &:hover {
          text-decoration: underline !important;
        }

        @media (max-width: 700px) {
          font-size: 1rem;
          text-decoration: underline;
        }
      }

      .sharings {
        margin: 6rem 0;

        h2 {
          font-family: "Merriweather", serif;
          margin-bottom: 0;
        }

        .separator img {
          margin-top: 0;
        }
      }
    }
  }
`;

export default App;
