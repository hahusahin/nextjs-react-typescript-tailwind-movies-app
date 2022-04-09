import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import Actors from "../../components/Movies/Actors";
import MovieDetails from "../../components/Movies/MovieDetails";
import ActorType from "../../models/actorType";
import MovieDetailType from "../../models/movieDetailType";
import { API_BASE_URL, API_KEY } from "../../utils/config";

const MovieDetail: NextPage<{ movieDetails: MovieDetailType; actors: ActorType[] }> = (props) => {

  return (
    <div className="flex-grow">
      <Head>
        <title>Movie Details</title>
        <meta
          name="description"
          content="Movies App created by using React + Next Js + Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MovieDetails details={props.movieDetails}/>
      <Actors actors={props.actors}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  const movieId = context.params?.movieId;

  const [movie, actors] = await Promise.all([
    axios.get(`${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`),
    axios.get(`${API_BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`),
  ]);

  const { id, genres, poster_path, overview, release_date, runtime, title, vote_average } = movie.data
  const movieDetails: MovieDetailType = { id, genres, imageUrl: poster_path, overview, relDate: release_date, 
    runtime, title, userRating: vote_average }

  const actorDetails: ActorType[] = actors.data.cast.slice(0, 10).map((actor: any) => ({
    id: actor.id, name: actor.name, character: actor.character, imageUrl: actor.profile_path
  }))

  return {
    props: {
      movieDetails,
      actors: actorDetails,
    },
  };
};

export default MovieDetail;
