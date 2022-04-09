import { useRouter } from "next/router";
import React, { useContext } from "react";
import { MovieContext } from "../../context/movie-context";
import apis from "../../utils/api";

const ScrollingNav: React.FC = () => {
  const router = useRouter()
  const movieCtx = useContext(MovieContext)

  const onClickHandler = (api: any) => {
    router.push(`/?genre=${api.id}`)
    movieCtx.resetState()
  }

  return (
    <nav className="relative bg-stone-900">
      <div className="flex space-x-8 p-4 xl:px-32 text-2xl no-scrollbar overflow-x-scroll whitespace-nowrap">
        {apis.map((api) => (
          <button
            className="transition duration-100 transform hover:scale-125 active:text-red-500"
            key={api.id}
            onClick={() => onClickHandler(api)}
          >
            {api.title}
          </button>
        ))}
      </div>
      {/* <div className="absolute top-3 right-0 h-10 w-1/12 bg-gradient-to-l from-gray-800" /> */}
    </nav>
  );
};

export default ScrollingNav;
