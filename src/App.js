import { useState } from "react";
import "./global.css";
import EVENT_DATA from "./data/events";
import PAGE_TEXT from "./data/text";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";
import Carousel from "./Carousel";

import separator from "./images/divider-orange.svg";
import feathers from "./images/feathers.svg";

// test url:
// http://localhost:3000/?lang=en&eventType=wellbeing&eventId=67543&tokenId=754754&regId=75347&t=2021-05-06-18-30&override=Yoga%20for

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

  const queryData = parseParams(window.location.search);
  const text = PAGE_TEXT[queryData?.lang] || {};
  const event = EVENT_DATA[queryData?.eventType] || {};
  const { h1, h3, h4, p2, p3, p4, p5, ul, btn1, btn2, btn3, quote1 } =
    text || {};
  const eventTitle = queryData.eventTitle || "";
  const [loading, setLoading] = useState(false);

  if (Object.keys(queryData).length <= 0) {
    return <p style={{ paddingLeft: "3rem" }}>Please provide query params</p>;
  }

  return (
    <Container>
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
            />
          </div>
          <img
            src={event.images.desktop}
            className="header-image desktop"
            alt={event.images.description}
          />
          <img
            src={event.images.mobile}
            className="header-image mobile"
            alt={event.images.description}
          />
        </header>
        <div className="navbar">
          <a href="#webinar-guidelines">{btn2}</a>{" "}
          <a href="#sharings">{btn3}</a>
        </div>
        <div className="feather-quote">
          <img src={feathers} alt="feathers" className="feathers" />
          <blockquote>"{quote1}" - Sadhguru</blockquote>
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
              if (typeof listItem === "function") {
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
            />
            <p>{p5}</p>
          </div>
          <div className="separator">
            <img
              src={separator}
              alt="leaf print with horizonal black lines (separator)"
            />
          </div>
          <footer className="footer">
            <h2>{h4}</h2>
            <p dangerouslySetInnerHTML={{ __html: p3 }} />
            <div className="sharings">
              <h2>Sharings</h2>
              <div className="separator">
                <img
                  src={separator}
                  alt="leaf print with horizonal black lines (separator)"
                />
              </div>
              <Carousel />
            </div>
          </footer>
        </div>
      </main>
    </Container>
  );
}

const Container = styled.div`
  background: var(--offWhite);

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
      }

      h2 {
        font-family: "Fedra Sans", serif;
        font-weight: 300;
        font-size: 2rem;
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
      }

      li {
        list-style: disc;
        font-size: 1.2rem;
        margin-bottom: 2rem;
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

    footer {
      text-align: center;

      h2 {
        margin-bottom: 0;
      }

      a {
        font-size: 1.5rem;
        color: black;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      .sharings {
        margin-top: 6rem;

        h2 {
          font-family: "Merriweather", serif;
          margin-bottom: 0;
        }

        p {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default App;
