import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Form = () => {
  const [data, setData] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((result) => setData(result.filter((item) => item.show.id === +id)));
  }, []);

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "center",
    marginTop: "90px",
    gap: "10px",
  };

  return (
    <form
      style={styles}
      onSubmit={() => {
        alert("your tickets are confirmed");
        navigate("/");
      }}
    >
      <p>
        Confirm your Tickets for movie:
        <h1 style={{ textAlign: "center" }}> {data[0]?.show?.name} </h1>
      </p>
      <input
        required
        type="name"
        placeholder="Name"
        style={{
          width: "300px",
          padding: "10px",
          marginTop: "5px",
          borderRadius: "50px",
        }}
      />
      <input
        type="number"
        placeholder="Enter mobile number"
        required
        style={{
          width: "300px",
          padding: "10px",
          marginTop: "5px",
          borderRadius: "50px",
        }}
      />
      <input
        type="number"
        placeholder="Enter number of tickets"
        required
        style={{
          width: "300px",
          padding: "10px",
          marginTop: "5px",
          borderRadius: "50px",
        }}
      />

      <button style={{ marginTop: "10px" }} type="submit">
        submit
      </button>
    </form>
  );
};

export default Form;
