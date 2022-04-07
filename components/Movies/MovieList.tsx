import React from "react";
import MovieItemType from "../../models/movieItemType";
import MovieItem from "./MovieItem";

const MovieList: React.FC<{ movies: MovieItemType[]; genre: string }> = (props) => {
  return (
    <div className="container mx-auto p-8 xl:px-32">
      <h1 className="text-4xl text-center mb-8">{props.genre}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-12">
        {props.movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
