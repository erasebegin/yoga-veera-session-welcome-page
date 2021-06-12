import Slider from 'react-slick';
import styled from 'styled-components';
import SHARINGS from '../data/sharings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nextArrow from '../images/next.svg';
import prevArrow from '../images/prev.svg';

const NextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <img
      src={nextArrow}
      className={className}
      style={{ ...style, display: 'block', opacity: 0.5 }}
      onClick={onClick}
      alt="next arrow"
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <img
      src={prevArrow}
      className={className}
      style={{ ...style, display: 'block', opacity: 0.5 }}
      onClick={onClick}
      alt="previous arrow"
    />
  );
};

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <CarouselContainer {...settings}>
      {SHARINGS.map((sharer, index) => {
        return (
          <div className="slide-container" key={index}>
            <img src={sharer.image} alt={sharer.name} />
            <p>
              “{sharer.quote}” -{' '}
              <b>
                {sharer.name}, {sharer.course}
              </b>
            </p>
          </div>
        );
      })}
    </CarouselContainer>
  );
}

const CarouselContainer = styled(Slider)`
  margin-left: 0.8rem;
  margin-right: 1rem;
  .slide-container {
    display: flex !important;
    align-items: center;
    font-weight: 300;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    img {
      margin-right: 2rem;
      margin-left: 2rem;
    }

    p {
      margin-right: 2rem;
      font-size: 1.4rem;
      @media (max-width: 700px) {
        margin-right: 0;
        margin-top: 2rem;
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 700px) {
    .slick-next {
      top: 5rem;
      /* right: 2%; */
    }

    .slick-prev {
      top: 5rem;
      /* margin-left: 2rem; */
      /* left: 2%; */
    }
  }
`;
