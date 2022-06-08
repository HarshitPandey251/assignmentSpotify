import React from "react";
import { Rating } from "react-simple-star-rating";

const ImageCard = ({ image }) => {
  const [value, setValue] = React.useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setValue(rate);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:-translate-y-0.5 hover:shadow duration-200">
      <img src={image?.coverUrl} alt="" className="w-full h-3/6" />
      <div className="px-6 py-4">
        <div className="flex">
          <div className="h-4 w-6 bg-blue-600 rounded mb-2">
            <p className="text-xs text-white text-center">
              {image?.totalRating === null ? 0 : image?.totalRating}
            </p>
          </div>
          <p className="text-xs ml-2">
            {image?.totalRatingUser === null ? 0 : image?.totalRatingUser}{" "}
            Reviews
          </p>
        </div>
        <div className="text-sm font-semibold text-heading md:text-base">
          {image?.songName}
        </div>
        <div className=" cursor-pointer truncate text-xs text-body md:text-sm">
          Lewis Capaldi
        </div>
        <div className=" cursor-pointer truncate text-xs text-body md:text-sm mt-1">
          {image?.releaseDate}
        </div>
        <div className="flex mb-4">
          <Rating
            onClick={handleRating}
            ratingValue={value}
            size={20}
            label
            transition
            fillColor="orange"
            emptyColor="gray"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
