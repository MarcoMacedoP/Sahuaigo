import React from "react";
import styles from "./component.module.sass";
import { Field, ErrorMessage, FieldProps } from "formik";

export type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  options?: {
    value: string;
  }[];
};

export const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  name,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <Field
        className={styles.field}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} />
    </div>
  );
};
