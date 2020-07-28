import Head from "next/head";
import styles from "./index.module.sass";
import { ContentWithImage } from "../components/ContentWithImage";
import { Hotel } from "../components/Hotel";
import { GetStaticProps } from "next";

interface HomeProps {}

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
				<Hotel title="Nombre del hotel" description={`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id maximus est. Aliquam arcu nunc, blandit a massa vel, ultricies ultricies dui. Proin in accumsan orci. Aliquam posuere mauris a tristique viverra. Cras sodales risus diam, non commodo purus rutrum sed. Mauris 
`} />
			</article>
		</main>
	);
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	return {
		props: {}
	};
};
