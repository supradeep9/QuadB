import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../component/Card";

function Mainpage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  console.log(data ?? data);

  return (
    <>
      <h1 className="main-header">Welcome to Movie Hub</h1>
      <div className="App">
        {data ? (
          data.map((item) => {
            if (item?.show?.image?.medium) {
              return <Card item={item} />;
            }
          })
        ) : (
          <h1>Something went wrong</h1>
        )}
      </div>
    </>
  );
}

export default Mainpage;
