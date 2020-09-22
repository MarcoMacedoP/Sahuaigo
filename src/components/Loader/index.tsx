import React from "react";
import styles from "./component.module.scss";

type LoaderProps = {};

export const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <div className={styles.loader}>
      <svg className={styles.circular} viewBox="25 25 50 50">
        <circle
          className={styles.path}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  );
};
