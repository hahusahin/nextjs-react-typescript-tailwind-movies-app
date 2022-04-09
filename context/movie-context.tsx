import React, { useState } from "react";
import MovieItemType from "../models/movieItemType";

type MovieContextType = {
  movies: MovieItemType[];
  page: number;
  status: string,
  addMovies: (movies: MovieItemType[]) => void;
  updatePage: () => void;
  updateStatus: (status: string) => void;
  resetState: () => void;
};

export const MovieContext = React.createContext<MovieContextType>({
  movies: [],
  page: 2,
  status: "",
  addMovies: () => {},
  updatePage: () => {},
  updateStatus: () => {},
  resetState: () => {},
});

const MovieContextProvider: React.FC = (props) => {
  const [movies, setMovies] = useState<MovieItemType[]>([]);
  const [page, setPage] = useState<number>(2);
  const [status, setStatus] = useState<string>("")

  const addMovies = (loadedMovies: MovieItemType[]) => {
    setMovies((currentMovies) => [...currentMovies, ...loadedMovies]);
  };

  const updatePage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const updateStatus = (status: string) => {
    setStatus(status)
  }

  const resetState = () => {
    setMovies([]);
    setPage(2);
    setStatus("")
  };

  return (
    <MovieContext.Provider
      value={{ movies, page, status, addMovies, updatePage, updateStatus, resetState }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
