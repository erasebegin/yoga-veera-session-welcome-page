import React from 'react';
import styled from 'styled-components';

export default function fourOhFour() {
  return (
    <Container>
      <div>
        <h1>
          Oops, something went wrong <br className="break" />
          😅
        </h1>
        <p>
          We weren't able to find a session for you to join. If you believe this
          is a mistake please email us at:
          <br /> <br />
          <a href="mailto:webianr.europe@ishafoundation.org">
            webinar.europe@ishafoundation.org
          </a>
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f7f1e3;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--offWhite);
    padding: 3rem;
    border-radius: 5px;

    h1 {
      font-family: 'Merriweather', serif;
      font-weight: 600;
      letter-spacing: 0.05rem;
      font-size: 2rem;
      margin: 0;
      margin-bottom: 1.5rem;
      line-height: 3.1rem;
      color: var(--blueDarker);

      @media (max-width: 700px) {
        text-align: center;
      }

      .break {
        display: none;
        @media (max-width: 700px) {
          display: initial;
        }
      }
    }

    p {
      line-height: 1.7rem;
      font-size: 1.3rem;
    }
  }
`;
