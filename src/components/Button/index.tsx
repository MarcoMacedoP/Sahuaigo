import React from "react";
import styles from "./styles.module.sass";

type ButtonProps = {
  /** A url to be redirected when button is clicked */
  url?: string;
  /**  A function to be called when the button is clicked */
  onClick?: () => void;
  /** The button text */
  text: string;
};

export const Button: React.FC<ButtonProps> = ({
  url,
  text,
  onClick,
}) => {
  return (
    <a href={url} className={styles.button} onClick={onClick}>
      {text}
    </a>
  );
};
