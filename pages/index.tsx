import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import ScrollingNav from "../components/layout/ScrollingNav";
import MovieList from "../components/Movies/MovieList";
import MovieItemType from "../models/movieItemType";
import apis from "../utils/api";

const Home: NextPage<{ movies: MovieItemType[]; title: string }> = (props) => {

  return (
    <div className="flex-grow">
      <Head>
        <title>Movies App</title>
        <meta name="description" content="Movies App created by using React + Next Js + Typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollingNav />

      <MovieList movies={props.movies} genre={props.title}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  const genre =  context.query.genre as string || "popular"
  const foundAPI = apis.find((api) => api.id === genre);
  const title = `${foundAPI!.title} Movies`
  const response = await axios.get(foundAPI!.url);
  const data = response.data.results

  const movies: MovieItemType[] = data.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    imageUrl: movie.poster_path,
  }))

  return {
    props: {
      movies,
      title,
    },
  };
};

export default Home;
