import React, { useEffect, useState } from "react";
const Print_Information = React.memo(({ TextCount }) => {
  const [Comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((res) => res.json())
      .then((data) => {
        setComments(data.slice(0, TextCount));
      });
  }, []);

  if (Comments.length === 0) {
    return (
      <>
        <h2>Loading...</h2>
        <p>Loading Comment...</p>
      </>
    );
  }

  return Comments.map((Com, index) => (
    <div className="Information_Box" key={index}>
      <h2 className="Header_Text">{Com.name}</h2>
      <p className="Paragraph_Text">{Com.body}</p>
    </div>
  ));
});
export default Print_Information;
