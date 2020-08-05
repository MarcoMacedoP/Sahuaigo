import React from "react";
import styles from "./component.module.sass";

type SuccessProps = {
  message: string;
  title: string;
};

export const Success: React.FC<SuccessProps> = ({
  message,
  title,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>{title}</p>
        <p
          className={styles.message}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>
    </div>
  );
};
