import Head from "next/head";
import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>suyoin</title>
				<meta property="og:site_name" content="suyoin" />
				<meta property="og:title" content="suyoin" />
				<meta property="og:description" content="the place" />
				<meta name="theme-color" content="#FF6262" />
			</Head>
			<AnimateSharedLayout>
				<Component {...pageProps} />
			</AnimateSharedLayout>
		</>
	);
}

export default MyApp;
