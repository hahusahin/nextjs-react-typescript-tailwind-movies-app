import React from "react";
import ActorType from "../../models/actorType";
import ActorItem from "./ActorItem";

const Actors: React.FC<{ actors: ActorType[] }> = (props) => {
  return (
    <div className="container mx-auto px-4 xl:px-32 pb-8">
      <h1 className="text-2xl font-medium text-center mb-8">ACTORS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-12">
        {props.actors.map((actor) => (
          <ActorItem key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default Actors;
