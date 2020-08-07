import React from "react";
import styles from "./component.module.sass";
import { Button } from "../Button";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

interface HotelProps extends Hotel {
  isInverted?: boolean;
  description: string;
  onSelect: (id: string) => void;
}

export const Hotel = ({
  name,
  description,
  images = [],
  logo,
  id,
  stars: baseStars,
  onSelect,
  isInverted,
}: HotelProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const stars = Array.from(Array(baseStars).keys());
  const onNextSlide = () => setCurrentIndex(currentIndex + 1);
  const onLastSlide = () => setCurrentIndex(currentIndex - 1);

  return (
    <div
      className={
        isInverted ? styles.containerInverted : styles.container
      }
    >
      <section className={styles.section}>
        <HotelTitle
          logo={logo}
          name={name}
          stars={stars}
          className={styles.titleContainerMobile}
        />
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={images.length}
        >
          <Slider className={styles.slider}>
            {images.map((slide, index) => (
              <Slide index={index} key={slide}>
                <div className={styles.slide}>
                  <img className={styles.hotelImage} src={slide} />
                </div>
              </Slide>
            ))}
          </Slider>
          <section className={styles.slideControls}>
            <ButtonBack onClick={onLastSlide}>
              <img
                className={styles.arrowBack}
                src="/assets/icons/arrow_forward.svg"
              />
            </ButtonBack>
            <ButtonNext onClick={onNextSlide}>
              <img src="/assets/icons/arrow_forward.svg" />
            </ButtonNext>
            <div className={styles.slideDots}>
              {images.map((slide, index) => (
                <div
                  className={`${styles.slideDot} ${
                    index === currentIndex && styles.slideDotSelected
                  } `}
                />
              ))}
            </div>
          </section>
        </CarouselProvider>
      </section>
      <section className={styles.section}>
        <HotelTitle
          stars={stars}
          name={name}
          logo={logo}
          className={styles.titleContainerDesktop}
        />
        <p className={styles.description}>{description}</p>
        <Button
          text="Reserva en este hotel"
          onClick={() => onSelect(id)}
          url="#form"
        />
      </section>
    </div>
  );
};

type HotelTitleProps = {
  stars: number[];
  name: string;
  logo: string;
  className: string;
};

const HotelTitle = ({
  stars,
  name,
  logo,
  className,
}: HotelTitleProps) => {
  return (
    <div className={className}>
      <div className={styles.title}>
        <p> {name} </p>
        <div className={styles.emojiContainer}>
          {stars.map(() => (
            <span
              className={styles.emoji}
              role="img"
              aria-label="star"
            >
              ⭐
            </span>
          ))}
        </div>
      </div>
      <img
        className={styles.logo}
        src={logo}
        alt={`Logo del hotel ${name} en Sahuayo, Michoacan, México.`}
      />
    </div>
  );
};
