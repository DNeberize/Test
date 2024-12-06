import React, { useState, useEffect } from "react";

const PrintElement = React.memo(() => {
  const [person, setPerson] = useState([]);
  const [error, setError] = useState(null);
  const length = 15;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPerson(data.slice(0, length));
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <li className="sport">
        <img
          src="./src/assets/nfl.png"
          alt="Error occurred"
          aria-hidden="true"
        />
        <div className="sport_info">
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      </li>
    );
  }

  return (
    <>
      {person.map((p) => (
        <li key={p.id} className="sport">
          <img src={p.url} alt={p.title || "Image"} />
          <div className="sport_info">
            <div>
              <h3>{p.id}</h3>
              <p>{p.title || "No title available"}</p>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}, []);

export default PrintElement;
