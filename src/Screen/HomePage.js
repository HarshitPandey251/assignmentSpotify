import React from "react";
import ImageCard from "../components/ImageCard";
const images = [
  {
    id: "1",
    webformatURL: "https://source.unsplash.com/user/c_v_r/1900x800",
  },
  {
    id: "2",
    webformatURL: "https://source.unsplash.com/user/c_v_r/1900x800",
  },
  {
    id: "3",
    webformatURL: "https://source.unsplash.com/user/c_v_r/1900x800",
  },
  {
    id: "4",
    webformatURL: "https://source.unsplash.com/user/c_v_r/1900x800",
  },
  {
    id: "5",
    webformatURL: "https://source.unsplash.com/user/c_v_r/1900x800",
  },
  {
    id: "6",
    webformatURL: "https://source.unsplash.com/user/c_v_r/1900x800",
  },
];

const HomePage = ({ image }) => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-10 ml-10 mr-10">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default HomePage;
