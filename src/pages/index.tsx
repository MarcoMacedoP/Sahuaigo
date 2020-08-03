import Head from "next/head";
import styles from "./index.module.sass";
import { ContentWithImage } from "../components/ContentWithImage";
import { Hotel } from "../components/Hotel";
import { GetStaticProps } from "next";
import { Form, Formik } from "formik";
import { Input } from "../components/Input";
import { LandingForm } from "../components/LandingForm";
import { Service } from "../components/Service";

interface HomeProps {}

const hotels: Hotel[] = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id maximus est. Aliquam arcu nunc, blandit a massa vel, ultricies ultricies dui. Proin in accumsan orci. Aliquam posuere mauris a tristique viverra. Cras sodales risus diam, non commodo purus rutrum sed. Mauris",
    images: [],
    name: "Nombre del hotel",
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id maximus est. Aliquam arcu nunc, blandit a massa vel, ultricies ultricies dui. Proin in accumsan orci. Aliquam posuere mauris a tristique viverra. Cras sodales risus diam, non commodo purus rutrum sed. Mauris",
    images: [],
    name: "Nombre del hotel",
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id maximus est. Aliquam arcu nunc, blandit a massa vel, ultricies ultricies dui. Proin in accumsan orci. Aliquam posuere mauris a tristique viverra. Cras sodales risus diam, non commodo purus rutrum sed. Mauris",
    images: [],
    name: "Nombre del hotel",
  },
  {
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id maximus est. Aliquam arcu nunc, blandit a massa vel, ultricies ultricies dui. Proin in accumsan orci. Aliquam posuere mauris a tristique viverra. Cras sodales risus diam, non commodo purus rutrum sed. Mauris",
    images: [],
    name: "Nombre del hotel",
  },
];

export default function Home() {
  return (
    <main>
      <ContentWithImage
        imageUrl="/assets/img/landing-1.jpg"
        title="Experimenta Sahuayo."
        content="En Sahuayo se encuentra lo mejor de Michoacan. Atreveté a  conocerlo y reserva con nosotros."
        isPageInitial
      />
      <ContentWithImage
        imageUrl="/assets/img/landing-2.jpg"
        title="Lol"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id maximus est. Aliquam arcu nunc, blandit a massa vel, ultricies ultricies dui. Proin in accumsan orci. Aliquam posuere mauris a tristique viverra. Cras sodales risus diam, non commodo purus rutrum sed. Mauris"
        isInverted
      />
      <article className={styles.hotelsContainer}>
        <h3 className={styles.subtitle}>
          Conoce nuestros mejores hoteles
        </h3>
        {hotels.map((hotel, index) => (
          <Hotel
            key={hotel.id}
            isInverted={index % 2 !== 0}
            title={hotel.name}
            description={hotel.description}
          />
        ))}
      </article>
      <article className={styles.services}>
        <h4 className={styles.servicesTitle}>Nuestros servicios</h4>
        <p className={styles.servicesDescription}>
          Además de ofrecerte los mejores hoteles de Sahuayo tambien
          contamos con los siguientes servicios
        </p>
        <Service
          description="Despreocupate en llegar a tu hotel. Nosotros te llevamos con todas las comodidades."
          name="Transporte aeropuerto-hotel"
          image="https://images.pexels.com/photos/1588073/pexels-photo-1588073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <Service
          description="Te mostramos lo mejor de Sahuayo."
          name="Recorridos turisticos"
          image="/assets/img/landing-2.jpg"
        />
      </article>
      <LandingForm hotels={hotels} />
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {},
  };
};
