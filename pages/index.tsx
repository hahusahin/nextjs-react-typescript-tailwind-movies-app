import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import ScrollingNav from "../components/layout/ScrollingNav";
import MovieList from "../components/Movies/MovieList";
import MovieItemType from "../models/movieItemType";
import apis from "../utils/api";
import { API_BASE_URL, API_KEY } from "../utils/config";

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

  let results = []
  let title = ""
  
  if(context.query.search){
    title = "Search Results"
    const query = context.query.search
    const response = await axios.get(`${API_BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
    results = response.data.results

  } else {

    const foundAPI = apis.find((api) => api.id === context.query.genre);
    title = foundAPI?.title ? `${foundAPI?.title} Movies` : "Popular Movies"
    const response = await axios.get(foundAPI?.url || apis[0].url);
    results = response.data.results
  }

  const movies: MovieItemType[] = results.map((movie: any) => ({
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
