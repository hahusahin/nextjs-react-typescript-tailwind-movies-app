import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { MovieContext } from "../../context/movie-context";
import MovieItemType from "../../models/movieItemType";
import apis from "../../utils/api";
import { API_KEY, SEARCH_URL } from "../../utils/config";
import MovieItem from "./MovieItem";

const MovieList: React.FC<{ movies: MovieItemType[]; genre: string }> = (props) => {
  const movieCtx = useContext(MovieContext);
  const router = useRouter();

  const loadMoreHandler = async () => {
    
    movieCtx.updatePage();
    
    try {
      movieCtx.updateStatus("loading");

      const page = movieCtx.page;
      let data = []
      if(router.query.key){
        const keyword = router.query.key
        const response = await axios.get(`${SEARCH_URL}?query=${keyword}&page=${page}&api_key=${API_KEY}`);
        data = response.data.results;
      } else {
        const genre = (router.query.genre as string) || "popular";
        const foundAPI = apis.find((api) => api.id === genre);
        const response = await axios.get(`${foundAPI!.url}&page=${page}`);
        data = response.data.results;
      }      

      const loadedMovies: MovieItemType[] = data.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        imageUrl: movie.poster_path,
      }));

      movieCtx.addMovies(loadedMovies);
      movieCtx.updateStatus("success");

    } catch (err) {
      
      movieCtx.updateStatus("error");
    }
  };

  return (
    <div className="container mx-auto p-8 xl:px-32">
      <h1 className="text-4xl font-semibold text-center mt-4 mb-16">
        {props.genre.toUpperCase()}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-12 mb-8">
        {props.movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
        {movieCtx.status === "success" &&
          movieCtx.movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
      </div>
      <div className="text-center">
        {movieCtx.status === "loading" && (
          <p className="text-2xl text-center">Loading...</p>
        )}
        {movieCtx.status === "error" && (
          <p className="text-2xl text-center">
            An Error Occured. Please try again later
          </p>
        )}
        {movieCtx.status !== "loading" && movieCtx.status !== "error" && (
          <button
            className="bg-cyan-800 text-2xl py-3 px-5 rounded-full hover:bg-cyan-700"
            onClick={loadMoreHandler}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
