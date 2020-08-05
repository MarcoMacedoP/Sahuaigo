import Head from "next/head";
import styles from "./index.module.sass";
import { ContentWithImage } from "../components/ContentWithImage";
import { Hotel } from "../components/Hotel";
import { GetStaticProps } from "next";
import { Form, Formik } from "formik";
import { Input } from "../components/Input";
import { LandingForm } from "../components/LandingForm";
import { Service } from "../components/Service";
import { Layout } from "../components/Layout";

interface Information {
  title: string;
  content: string;
  imageUrl: string;
}
interface HomeProps {
  information: Information[];
  hotels: Hotel[];
  services: {
    title: string;
    content: string;
    data: Information[];
  };
}

export default function Home({
  hotels,
  information,
  services,
}: HomeProps) {
  console.log(hotels);
  return (
    <Layout>
      {information.map((element, index) => (
        <ContentWithImage
          key={index}
          title={element.title}
          content={element.content}
          imageUrl={element.imageUrl}
          isPageInitial={index === 0}
        />
      ))}

      <article className={styles.hotelsContainer}>
        <h3 className={styles.subtitle}>
          Conoce nuestros mejores hoteles
        </h3>
        {hotels.map((hotel, index) => (
          <Hotel
            key={hotel.id}
            isInverted={index % 2 !== 0}
            {...hotel}
          />
        ))}
      </article>

      <article className={styles.services}>
        <h4 className={styles.servicesTitle}>{services.title} </h4>
        <p className={styles.servicesDescription}>
          {services.content}
        </p>
        {services.data.map((service, index) => (
          <Service
            key={index}
            name={service.title}
            description={service.content}
            image={service.imageUrl}
          />
        ))}
      </article>
      <LandingForm hotels={hotels} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const hotels = (await import("../db/Hotels.json")).default;
  const information = (await import("../db/LandingInformation.json"))
    .default;
  const services = (await import("../db/Services.json")).default;

  return {
    props: {
      hotels,
      information,
      services,
    },
  };
};
