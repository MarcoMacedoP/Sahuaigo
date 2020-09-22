import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Input } from "../Input";
import inputStyles from "../Input/component.module.sass";
import styles from "./component.module.sass";
import { Button } from "../Button";
import { Loader } from "../Loader";
import { Success } from "../Succes";
import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "El campo es requerido"
  },
  string: {
    email: "Email invalido"
  }
});

const validationSchema: yup.ObjectSchema<EmailData> = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  message: yup.string().notRequired(),
  name: yup.string().required(),
  phone: yup
    .string()
    .matches(/[0-9+ ]{8,20}/, "Número invalido")
    .required(),
  selectedHotelId: yup.string().required()
});

type LandingFormProps = {
  hotels: Hotel[];
  selectedHotelId?: string;
};

type Status = {
  state: "loading" | "error" | "unset" | "success";
  error: null | string;
};

export const LandingForm: React.FC<LandingFormProps> = ({
  hotels,
  selectedHotelId
}) => {
  const [status, setStatus] = useState<Status>({
    state: "unset",
    error: null
  });

  const initialValues: EmailData = {
    email: "",
    name: "",
    message: "",
    phone: "",
    selectedHotelId
  };

  async function onSubmit(values: EmailData) {
    setStatus({
      state: "loading",
      error: null
    });
    try {
      const data = await fetch("/api/email", {
        method: "post",
        body: JSON.stringify(values)
      }).then(response => response.json());
      console.log(data);
      setStatus({
        state: "success",
        error: null
      });
    } catch (error) {
      console.log({ error });
      setStatus({
        state: "error",
        error
      });
    }
  }
  return (
    <section className={styles.container} id="form">
      <h4 className={styles.title}>Realiza una reservación con nosotros.</h4>
      {status.state === "loading" ? (
        <div className={styles.statusContainer}>
          <Loader />
        </div>
      ) : status.state === "success" ? (
        <div className={styles.statusContainer}>
          <Success
            title="Gracias por reservar con nosotros."
            message="Enseguida nos pondremos en contacto para confirmar tu reservación."
          />
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, values, handleChange, setFieldValue }) => {
            useEffect(() => {
              setFieldValue("selectedHotelId", selectedHotelId);
            }, [selectedHotelId]);

            return (
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
                  <select
                    name="selectedHotelId"
                    className={inputStyles.field}
                    onChange={handleChange}
                    value={values.selectedHotelId}
                  >
                    {hotels.map(hotel => (
                      <option value={hotel.id} className={styles.selectOption}>
                        {hotel.name.toUpperCase()}
                      </option>
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
                    style={{ resize: "none" }}
                    value={values.message}
                  ></textarea>
                </div>
                <Button
                  onClick={handleSubmit}
                  text="Realizar una reservación."
                />
              </Form>
            );
          }}
        </Formik>
      )}
    </section>
  );
};
