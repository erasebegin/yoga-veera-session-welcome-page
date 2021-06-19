import { useState } from 'react';
import './global.css';
import styled, { css } from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
// DATA
import EVENT_DATA from './data/events';
import PAGE_TEXT from './data/text';
// COMPONENTS
import SubmitButton from './components/SubmitButton';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
// UTILITIES
import getEventType from './utilities/getEventType';
// IMAGES
import separator from './images/divider-orange.svg';
import feathers from './images/feathers.svg';

// test url:
// http://localhost:3000/?lang=en&eventType=wellbeing&eventId=67543&tokenId=754754&regId=75347&t=2021-05-06-18-30&tz=BST&eventTitle=Yoga%20for%20Wellbeing

function App() {
  const parseParams = (querystring) => {
    // parse query string
    const params = new URLSearchParams(querystring);

    const obj = {};

    // iterate over all keys
    for (const key of params.keys()) {
      if (params.getAll(key).length > 1) {
        obj[key] = params.getAll(key);
      } else {
        obj[key] = params.get(key);
      }
    }

    return obj;
  };

  const getEventCategory = (typeString) => {
    if (typeString.match('Veera')) {
      return 'yogaveera';
    } else {
      return 'foundation';
    }
  };

  const queryData = parseParams(window.location.search);
  const text = PAGE_TEXT[queryData?.lang] || PAGE_TEXT.en || {};
  const eventCategory = getEventCategory(queryData.eventType);
  const event =
    EVENT_DATA[eventCategory][
      getEventType(queryData?.eventType, eventCategory)
    ] || EVENT_DATA.yogaveera.wellbeing;
  const quote =
    text.quotes[getEventType(queryData?.eventType, eventCategory)] || text.quotes['wellbeing'];
  const { h1, h3, h4, p2, p5, ul, btn1, btn2, btn3 } = text || {};
  const eventTitle = queryData.eventTitle || '';
  const [loading, setLoading] = useState(false);
  const [noUrl, setNoUrl] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLate, setIsLate] = useState(false);
  const [isEarly, setIsEarly] = useState(false);

  if (Object.keys(queryData).length <= 0) {
    return <p style={{ paddingLeft: '3rem' }}>Please provide query params</p>;
  }

  if (!event) {
    return (
      <p style={{ paddingLeft: '3rem' }}>This is not a recognised event type</p>
    );
  }

  console.log(getEventType(queryData?.eventType, eventCategory));

  const loadingSpinnerShow = css`
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
  `;
  const loadingSpinnerHide = css`
    display: none;
  `;

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
        eventTime={queryData?.t}
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
              timeZone={queryData.tz}
              setNoUrl={setNoUrl}
              setModalOpen={setModalOpen}
              isLate={isLate}
              setIsLate={setIsLate}
              setIsEarly={setIsEarly}
            />
          </div>
          <img
            src={event?.images?.desktop}
            className="header-image desktop"
            alt={event?.images?.description}
          />
          <img
            src={event?.images?.mobile}
            className="header-image mobile"
            alt={event?.images?.description}
          />
        </header>
        <div className="navbar">
          <a href="#webinar-guidelines">{btn2}</a>{' '}
          <a href="#sharings">{btn3}</a>
        </div>
        <div className="feather-quote">
          <img src={feathers} alt="feathers" className="feathers" />
          <blockquote>“{quote}” - Sadhguru</blockquote>
          <p className="subheading">{p2(eventTitle)}</p>
        </div>
        <div className="separator">
          <img
            src={separator}
            alt="leaf print with horizonal black lines (separator)"
          />
        </div>
        <div className="main-content" id="webinar-guidelines">
          <h2>{h3}</h2>
          <ul className="instructions">
            {ul?.map((listItem, index) => {
              if (typeof listItem === 'function') {
                return <li key={index}>{listItem(event.duration)}</li>;
              }
              return <li key={index}>{listItem}</li>;
            })}
          </ul>
          <div className="button-container">
            <SubmitButton
              queryData={queryData}
              buttonText={btn1}
              loading={loading}
              setLoading={setLoading}
              eventDuration={parseInt(event.duration)}
              timeZone={queryData.tz}
              setNoUrl={setNoUrl}
              setModalOpen={setModalOpen}
              isLate={isLate}
              setIsLate={setIsLate}
              setIsEarly={setIsEarly}
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
            {queryData?.region === 'EU' ? (
              <a href="mailto:webinar.europe@ishafoundation.org">
                webinar.europe@ishafoundation.org
              </a>
            ) : (
              <a href="mailto:online.programs@ishafoundation.org">
                online.programs@ishafoundation.org
              </a>
            )}
            {/* <div className="sharings" id="sharings">
              <h2>Sharings</h2>
              <div className="separator">
                <img
                  src={separator}
                  alt="leaf print with horizonal black lines (separator)"
                />
              </div>
              <Carousel />
            </div> */}
          </section>
        </div>
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
      padding: 1rem;
      padding-left: 2rem;
      color: white;
      text-align: center;
      max-width: 600px;

      @media (max-width: 700px) {
        padding: 0;
        top: unset;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -10%);
      }

      h1 {
        font-family: 'Fira Sans', sans-serif;
        font-weight: 600;
        letter-spacing: 0.05rem;
        font-size: 2.5rem;
        margin: 0;
        margin-bottom: 1.5rem;
        line-height: 3.1rem;

        @media (max-width: 800px) {
          font-size: 2rem;
        }
      }

      h2 {
        font-family: 'Fedra Sans', serif;
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

        @media (max-width: 1000px) {
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
      font-family: 'Merriweather', serif;
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
          font-family: 'Merriweather', serif;
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
