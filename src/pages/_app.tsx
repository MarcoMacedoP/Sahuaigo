import { AppPropsType } from "next/dist/next-server/lib/utils";
import "reset-css/reset.css";
import "../styles/global.sass";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function App({ Component, pageProps }: AppPropsType) {
	return <Component {...pageProps} />;
}
