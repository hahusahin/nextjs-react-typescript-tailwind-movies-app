import Image from "next/image";
import React from "react";
import { BsClock } from "react-icons/bs";
import { FcRating } from "react-icons/fc"
import MovieDetailType from "../../models/movieDetailType";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../utils/config";

const MovieDetails: React.FC<{ details: MovieDetailType }> = (props) => {

  return (
    <div className="container mx-auto px-4 xl:px-32 py-8">
      <div className="grid md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-12 gap-6">
        <div className="md:col-span-1 lg:col-span-2 xl:col-span-3 p-4 sm:p-8 md:p-0">
          <Image
            className="rounded-xl"
            src={`${IMAGE_BASE_URL}${POSTER_SIZE}${props.details.imageUrl}`}
            layout="responsive"
            height={513}
            width={342}
            alt=""
          />
        </div>
        <div className="md:col-span-2 lg:col-span-5 xl:col-span-9">
          <p className="text-3xl mb-6">{`${props.details.title} (${new Date(
            props.details.relDate
          ).getFullYear()})`}</p>
          <div className="flex flex-wrap gap-4 mb-6">
            {props.details.genres.map((genre) => (
              <span
                className="bg-pink-900 text-l font-medium px-3 py-1 rounded-full"
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center mb-6">
            <BsClock size="1.5rem" />
            <span className="text-xl">
              {`${Math.floor(props.details.runtime / 60)}h : ${props.details.runtime % 60}m`}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 items-center mb-6">
            <FcRating size="2rem" />
            <span className="text-xl">{props.details.userRating} / 10</span>
          </div>
          <p className="text-lg font-medium mb-2">Overview</p>
          <p className="text-lg">{props.details.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
