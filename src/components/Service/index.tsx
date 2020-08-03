import React from "react";
import styles from "./component.module.sass";

type ServiceProps = {
  name: string;
  description: string;
  image: string;
};

export const Service: React.FC<ServiceProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.information}>
        <p className={styles.title}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <img className={styles.image} src={image} alt="" />
    </section>
  );
};
