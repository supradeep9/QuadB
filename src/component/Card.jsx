import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ item }) => {
  const navigate = useNavigate();
  const {
    show: { name, image },
  } = item;
  return (
    <div className="parent">
      <img src={image.medium} className="image" />
      <div className="child">
        <h1>{name}</h1>

        <button
          onClick={() => {
            navigate(`/summary/${item.show.id}`);
          }}
        >
          {" "}
          More Details{" "}
        </button>
      </div>
    </div>
  );
};

export default Card;
