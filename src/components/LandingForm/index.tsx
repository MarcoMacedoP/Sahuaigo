import React from "react";
import { Formik, Form } from "formik";
import { Input } from "../Input";
import inputStyles from "../Input/component.module.sass";
import styles from "./component.module.sass";
import { Button } from "../Button";

type LandingFormProps = {
  hotels: Hotel[];
};

export const LandingForm: React.FC<LandingFormProps> = ({
  hotels,
}) => {
  const initialValues = {
    email: "",
    name: "",
    message: "",
    phone: "",
  };
  return (
    <section className={styles.container}>
      <h4 className={styles.title}>
        Realiza una reservación con nosotros.
      </h4>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
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
              <label className={inputStyles.label} htmlFor="message">
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
    </section>
  );
};
