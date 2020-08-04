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
}

export const Hotel = ({
  name,
  description,
  images = [],
  logo,
  stars: baseStars,
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
        <div className={styles.titleContainer}>
          <p className={styles.title}>
            <strong> {name} </strong>
          </p>
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={images.length}
        >
          <Slider className={styles.slider}>
            {images.map((slide, index) => (
              <Slide index={index} key={slide}>
                <div className={styles.slide}>
                  <img
                    className={styles.hotelImage}
                    src={
                      slide ||
                      "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768"
                    }
                  />
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
        <div className={styles.titleContainer}>
          <div className={styles.titleDesktop}>
            <p> {name} </p>
            <div className={styles.emojiContainer}>
              {stars.map(() => (
                <span
                  className={styles.emoji}
                  role="img"
                  aria-label="sheep"
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
        <p className={styles.description}>{description}</p>
        <Button text="Reserva en este hotel" />
      </section>
    </div>
  );
};
