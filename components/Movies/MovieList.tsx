import { useRouter } from "next/router";
import React from "react";
import MovieItemType from "../../models/movieItemType";
import MovieItem from "./MovieItem";

const MovieList: React.FC<{ movies: MovieItemType[]; genre: string }> = (props) => {
  const router = useRouter();

  const loadMoreHandler = () => {
    router.push({ query: { genre: router.query.search || router.query.genre, page: 2 } });
  };

  return (
    <div className="container mx-auto p-8 xl:px-32">
      <h1 className="text-4xl text-center mb-8">{props.genre}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-12 mb-8">
        {props.movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="text-center">
        <button
          className="bg-cyan-800 text-2xl py-3 px-5 rounded-full active:text-rose-400"
          onClick={loadMoreHandler}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default MovieList;
