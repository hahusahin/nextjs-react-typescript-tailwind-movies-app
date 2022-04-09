import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import MovieContextProvider from "../context/movie-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MovieContextProvider>
  );
}

export default MyApp;
