import React from "react";
import styles from "./component.module.sass";

type SuccessProps = {
  message: string;
};

export const Success: React.FC<SuccessProps> = ({ message }) => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
