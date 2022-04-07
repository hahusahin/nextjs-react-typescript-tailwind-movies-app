import Image from "next/image";
import Link from "next/link";
import React from "react";
import MovieItem from "../../models/movieItemType";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../utils/config";


const MovieItem: React.FC<{ movie: MovieItem }> = (props) => {
  return (
    <div className="text-center text-lg">
      <Link href={`/movie/${props.movie.id}`}>
        <a>
          <Image
            className="rounded-md transition duration-300 transform hover:scale-105 hover:cursor-pointer"
            src={`${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.imageUrl}`}
            layout="responsive"
            height={513}
            width={342}
            alt=""
          />
        </a>
      </Link>
      <p className="mt-2">{props.movie.title}</p>
    </div>
  );
};

export default MovieItem;
