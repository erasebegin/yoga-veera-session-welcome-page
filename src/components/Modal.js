import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import TEXT from '../data/text';
import { formatDate, formatTime } from '../utilities/convertTime';

export default function Modal({
  modalOpen,
  setModalOpen,
  lang = 'en',
  isLate,
  isEarly,
  noUrl,
  eventTime
}) {
  const close = (e) => {
    if (e.target.classList.contains('outer-container')) {
      setModalOpen(false);
    }
  };

  const [title, setTitle] = useState(
    TEXT[lang]?.errDefault.title || 'Something went wrong.'
  );
  const [text, setText] = useState(TEXT[lang]?.errDefault.text || '');

  const date = formatDate(eventTime);
  const time = formatTime(eventTime);

  useEffect(() => {
    if (noUrl) {
      setTitle(TEXT[lang]?.errNoUrl.title || '');
      setText(TEXT[lang]?.errNoUrl.text || '');
    }

    if (isLate) {
      setTitle(TEXT[lang]?.errClassOver.title || '');
      setText(TEXT[lang]?.errClassOver.text || '');
    }

    if (isEarly) {
      setTitle(TEXT[lang]?.errTooEarly.title || '');
      setText(TEXT[lang]?.errTooEarly.text(date, time) || '');
    }
  });

  return (
    <Container
      modalOpen={modalOpen}
      className="outer-container"
      onClick={(e) => close(e)}
    >
      <div className="modal-body">
        <button onClick={() => setModalOpen(false)} className="close-button">
          <FaTimes />
        </button>
        <h1>
          {title} <br className="break" />
          😅
        </h1>
        <p>
          {text} If you believe this is a mistake please email us at:
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
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;
  display: ${(props) => (props.modalOpen ? 'initial' : 'none')};

  .modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--offWhite);
    padding: 3rem;
    border-radius: 5px;

    .close-button {
      position: absolute;
      right: 0;
      top: 0;
      padding-top: 1em;
      padding-right: 1em;
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
    }

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
