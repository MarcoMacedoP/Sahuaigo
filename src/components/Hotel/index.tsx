import React from "react";
import styles from "./component.module.sass";
import { Button } from "../Button";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";

interface HotelProps {
  desc: string;
  title: string;
  isInverted?: boolean;
}

export const Hotel = (props: HotelProps) => {
  const slides = [1, 2];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const onNextSlide = () => setCurrentIndex(currentIndex + 1);

  const onLastSlide = () => setCurrentIndex(currentIndex - 1);

  return (
    <div
      className={props.isInverted ? styles.containerInverted : styles.container}
    >
      <section className={styles.section}>
        <p className={styles.title}>
          <strong> {props.title} </strong>
        </p>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={2}
        >
          <Slider className={styles.slider}>
            {slides.map((slide, index) => (
              <Slide index={index} key={slide}>
                <div className={styles.slide}>
                  <img
                    className={styles.hotelImage}
                    src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768"
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
              {slides.map((slide, index) => (
                <div
                  className={`${styles.slideDot} ${index === currentIndex &&
                    styles.slideDotSelected} `}
                />
              ))}
            </div>
          </section>
        </CarouselProvider>
      </section>
      <section className={styles.section}>
        <p className={styles.titleDesktop}> {props.title} </p>
        <p className={styles.description}>{props.description}</p>
        <Button text="Reserva en este hotel" />
      </section>
    </div>
  );
};
