import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      ></img>
      <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
      <div className="flex mt-3 justify-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
        ></img>
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
