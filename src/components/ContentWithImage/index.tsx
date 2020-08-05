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
};

export const ContentWithImage: React.FC<ContentWithImageProps> = ({
  isPageInitial = false,
  title,
  imageUrl,
  content,
}) => {
  return (
    <article className={styles.container}>
      <section className={styles.contentContainer}>
        {isPageInitial ? (
          <h1 className={styles.title}>{title}</h1>
        ) : (
          <h2 className={styles.title}>{title}</h2>
        )}
        <p className={styles.content}>{content}</p>
        <div className={styles.buttonContainer}>
          <Button text="Reserva con nosotros" url="#hotels" />
        </div>
      </section>
      <img className={styles.image} src={imageUrl} alt="" />
    </article>
  );
};
