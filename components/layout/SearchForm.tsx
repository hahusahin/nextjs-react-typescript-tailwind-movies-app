import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { MovieContext } from "../../context/movie-context";

const SearchForm: React.FC<{style: string; onCloseCollapsingBar: () => void;}> = (props) => {

  const router = useRouter();
  const movieCtx = useContext(MovieContext);
  const textRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    movieCtx.resetState();
    const query = textRef.current?.value;
    router.push(`/search?key=${query}`);
    props.onCloseCollapsingBar();
    formRef.current?.reset();
  };

  return (
    <form className={props.style} ref={formRef} onSubmit={submitHandler}>
      <input
        type="text"
        className="block p-2 w-64 text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
        placeholder="Search Movie"
        ref={textRef}
      />
      <button
        className="mx-2 p-2 rounded-md hover:bg-gray-800 active:bg-gray-700"
        type="submit"
      >
        <FaSearch size="1.5rem" />
      </button>
    </form>
  );
};

export default SearchForm;
