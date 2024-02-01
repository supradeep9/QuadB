import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import "./summary.css";

const Summary = () => {
  const [data, setData] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((result) => setData(result.filter((item) => item.show.id === +id)));
  }, []);
  console.log(data);
  let result = data[0]?.show.summary;
  console.log(result);
  console.log(data[0]?.show.summary);
  return (
    <>
      {data[0]?.show ? (
        <div className="summary-main">
          <div className="summary-parent">
            <h1 className="summary-heading">{data[0].show.name}</h1>

            <img
              src={data[0].show.image.original}
              alt=""
              className="summary-image"
            ></img>
            <h3 className="heading">Summary:</h3>
            <div
              dangerouslySetInnerHTML={{ __html: result }}
              className="summary"
            />
            <p style={{ alignSelf: "flex-start" }}>
              rating - {data[0].show.rating.average || 6.9}/10
              <span style={{ color: "gold" }}>
                &#9733; &#9733; &#9733;{" "}
              </span>{" "}
            </p>
            <button
              className="summary-button"
              onClick={() => {
                navigate(`/form/${data[0].show.id}`);
              }}
            >
              Book Tickets
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading... </h1>
      )}
    </>
  );
};

export default Summary;
