import Image from "next/image";
import React from "react";
import ActorType from "../../models/actorType";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../utils/config";

const ActorItem: React.FC<{ actor: ActorType }> = (props) => {
  return (
    <div className="text-center text-lg">
      <Image
        className="rounded-md"
        src={props.actor.imageUrl ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.imageUrl}` : "/not-found.png"}
        layout="responsive"
        height={513}
        width={342}
        alt=""
      />
      <p className="font-medium mt-2">{props.actor.name}</p>
      <p className="mt-2 text-slate-400">{props.actor.character}</p>
    </div>
  );
};

export default ActorItem;
