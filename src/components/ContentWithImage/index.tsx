import React from "react";
import styles from "./styles.module.sass";
import { Button } from "../Button";
type ContentWithImageProps = {
  /** Indicates if should render the title content as an h1, otherwise should render it as an h2 element*/
  isPageInitial?: boolean;
  /**The title */
  title: string;
  /** The component image */
  imageUrl: string;
  /** The text content */
  content: string;
  /** Defines if the row will be inverted in mobiles and tablets */
  isInverted?: boolean;
};

export const ContentWithImage: React.FC<ContentWithImageProps> = ({
  isPageInitial = false,
  title,
  imageUrl,
  content,
  isInverted,
}) => {
  return (
    <article
      className={`${styles.container} ${
        isInverted ? styles.containerInverted : ""
      }`}
    >
      <section className={styles.contentContainer}>
        {isPageInitial ? (
          <h1 className={styles.title}>{title}</h1>
        ) : (
          <h2 className={styles.title}>{title}</h2>
        )}
        <p className={styles.content}>{content}</p>
        <div className={styles.buttonContainer}>
          <Button text="Reserva con nosotros" />
        </div>
      </section>
      <img className={styles.image} src={imageUrl} alt="" />
    </article>
  );
};
