import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Input } from "../Input";
import inputStyles from "../Input/component.module.sass";
import styles from "./component.module.sass";
import { Button } from "../Button";
import { Loader } from "../Loader";
import { Success } from "../Succes";

type LandingFormProps = {
  hotels: Hotel[];
};

type Status = {
  state: "loading" | "error" | "unset" | "success";
  error: null | string;
};

export const LandingForm: React.FC<LandingFormProps> = ({
  hotels,
}) => {
  const [status, setStatus] = useState<Status>({
    state: "unset",
    error: null,
  });

  const initialValues: EmailData = {
    email: "",
    name: "",
    message: "",
    phone: "",
  };

  async function onSubmit(values: EmailData) {
    setStatus({
      state: "loading",
      error: null,
    });
    try {
      const data = await fetch("/api/email", {
        method: "post",
        body: JSON.stringify(values),
      }).then((response) => response.json());
      console.log(data);
      setStatus({
        state: "success",
        error: null,
      });
    } catch (error) {
      console.log({ error });
      setStatus({
        state: "error",
        error,
      });
    }
  }
  return (
    <section className={styles.container}>
      <h4 className={styles.title}>
        Realiza una reservación con nosotros.
      </h4>
      {status.state === "loading" ? (
        <Loader />
      ) : status.state === "success" ? (
        <Success message="Tu mensaje ha sido enviado correctamente. " />
      ) : (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit, values, handleChange }) => (
            <Form>
              <Input
                name="name"
                type="text"
                label="Nombre"
                placeholder="John Doe"
              />
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="test@example.com"
              />
              <Input
                name="phone"
                type="phone"
                label="Telefono"
                placeholder="1234567890"
              />
              <div className={inputStyles.container}>
                <label className={inputStyles.label} htmlFor="hotel">
                  Hotel
                </label>
                <select className={inputStyles.field}>
                  {hotels.map((hotel) => (
                    <option value={hotel.id}> {hotel.name} </option>
                  ))}
                </select>
              </div>
              <div className={inputStyles.container}>
                <label
                  className={inputStyles.label}
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  onChange={handleChange}
                  id="message"
                  name="message"
                  className={inputStyles.field}
                  value={values.message}
                ></textarea>
              </div>
              <Button
                onClick={handleSubmit}
                text="Realizar una reservación."
              />
            </Form>
          )}
        </Formik>
      )}
    </section>
  );
};
