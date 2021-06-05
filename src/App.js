import { useState, useEffect } from 'react';
import './global.css';
import { pageText, media } from './data';
import styled from 'styled-components';

// test url:
// http://localhost:3000/?lang=en&eventType=wellbeing&eventId=67543&tokenId=754754&regId=75347&t=2021-05-06-18-30

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
  const filteredText = pageText.filter((item) => item.lang === queryData?.lang);
  const text = filteredText[0]?.content;
  const filteredHeaderImage = media?.headerImage?.filter(
    (item) => item.type === queryData.eventType
  );
  const { image, description } = filteredHeaderImage[0] || {};
  const { h1, h2, h3, p2, p3, p4, p5, ul, btn } = text || {};
  const eventTitle = filteredText[0]?.titles[queryData.eventType];
  const eventDuration = filteredText[0]?.timings[queryData.eventType];

  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://staging.ishayoga.eu/index.php/webinar-join-now/`,
        {
          method: 'POST',
          body: {
            tokenId: queryData.tokenId,
            regId: queryData.regId
          }
        }
      );
      const res = await response.json();
      setLoading(false);
      console.log({ res });
    } catch (err) {
      console.log(err);
    }
  };

  // function seems to work, but possible off by one errors or
  // a million other errors I haven't thought of 👍
  const checkTime = (queryDate) => {
    const currentTime = new Date();
    const minute = currentTime.getMinutes();
    const hour = currentTime.getHours();
    const day = currentTime.getDay();
    const month = currentTime.getMonth();
    const year = currentTime.getFullYear();

    const eventTimeArr = queryDate.split('-');
    const eventYear = parseFloat(eventTimeArr[0]);
    const eventMonth = parseFloat(eventTimeArr[1]);
    const eventDay = parseFloat(eventTimeArr[2]);
    const eventHour = parseFloat(eventTimeArr[3]);
    const eventMinute = parseFloat(eventTimeArr[4]);

    if (eventYear === year && eventMonth === month && eventDay === day) {
      //+100 is a lazy way to avoid negative integers
      if (hour === eventHour && minute + 100 >= eventMinute + 100 - 30) {
        setButtonEnabled(true);
      } else if (hour === eventHour - 1 && minute >= eventMinute + 30) {
        setButtonEnabled(true);
      }
    }
  };

  useEffect(() => checkTime(queryData.t), []);

  return (
    <Container $buttonEnabled={buttonEnabled} $loading={loading}>
      <header>
        <div className="header-top">
          <img src={media.logo} alt="isha logo" />
          <h1>{h1}</h1>
        </div>
        <img src={image} className="header-image" alt={description} />
      </header>
      <main>
        <h1>{h2(eventTitle)}</h1>
        <div className="text-wrapper">
          <p>{p2}</p>
        </div>
        <div className="separator">
          <img
            src={media.separator}
            alt="leaf print with horizonal black lines (separator)"
          />
        </div>
        <h2>{h3(eventTitle)}</h2>
        <ul className="instructions">
          {ul?.map((listItem, index) => {
            if (typeof listItem === 'function') {
              return <li key={index}>{listItem(eventDuration)}</li>;
            }
            return <li key={index}>{listItem}</li>;
          })}
        </ul>
        <p dangerouslySetInnerHTML={{ __html: p3 }} />
        <p>{p4}</p>
        <footer className="text-wrapper">
          <form onSubmit={handleSubmit}>
            <button
              className="button-submit"
              type="submit"
              disabled={!buttonEnabled}
            >
              {btn}
            </button>
            <button
              className="button-blocker"
              onClick={() => setDisplayMessage(true)}
            />
            {displayMessage && (
              <p className="error-message">
                You may only enter the session up to 30 minutes before the start
                time
              </p>
            )}
          </form>
          <p>{p5}</p>
        </footer>
      </main>
    </Container>
  );
}

const Container = styled.div`
  background: var(--beige);

  header {
    .header-top {
      display: flex;
      align-items: center;
      padding: 1rem;
      padding-left: 2rem;
      background: var(--beigeDark);
      color: var(--greyDark);

      img {
        width: 50px;
        height: 50px;
      }

      h1 {
        margin-left: 3rem;
      }
    }

    .header-image {
      width: 100%;
    }
  }

  main {
    max-width: 1200px;
    padding: 1rem;
    color: var(--greyDark);
    margin: auto;

    h1 {
      font-family: 'Merriweather', serif;
      margin-bottom: 3rem;
      margin-left: 0.5rem;
    }

    .text-wrapper {
      background: white;
      padding: 1rem;
      box-shadow: inset 0 0 10px #f2f2f2;
      border-radius: 2px;
    }

    .separator {
      display: flex;
      justify-content: center;
      margin: 3rem 0;

      img {
        max-height: 30px;
      }
    }

    .instructions {
      line-height: 1.75rem;
    }

    footer {
      &.text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem;
        padding-bottom: 2rem;
        margin: 2rem 0;
      }
      form {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        .button-submit {
          background: var(--orange);
          color: white;
          border: none;
          padding: 0.5rem 2rem;
          margin-bottom: 1rem;
          border-radius: 5px;
          font-family: 'Merriweather', serif;
          font-weight: 600;
          opacity: ${(props) =>
            props.$buttonEnabled ? 1 : 0.7};
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
          color: var(--orangeDark);
          font-weight: 600;
        }
      }
    }
  }
`;

export default App;
