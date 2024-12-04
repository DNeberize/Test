import './Sport_list.css';
import { useState, useEffect } from 'react';

function Sport_list() {
  const [Person, setPerson] = useState([]);
  const lenght = 15

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setPerson(data.slice(0, lenght));
      });
  }, []);

  const Print_Person = () => {
    if (Person.length !== lenght) {
      return (
        <li className='sport'>
          <img src="./src/assets/nfl.png" alt="Loading" />
          <div className='sport_info'>
            <div>
              <h3>Wait</h3>
              <p>Loading...</p>
            </div>
          </div>
        </li>
      );
    }

    return Person.map((P) => (
      <li key={P.id} className='sport'>
        <img src={P.url} alt={P.title} />
        <div className='sport_info'>
          <div>
            <h3>{P.id}</h3>
            <p>{P.title}</p>
          </div>
        </div>
      </li>
    ));
  };

  return (
    <>
      <div id='text_box'>
        <div>
          <h2>Popular Right Now</h2>
          <p>
            What is popular right now? Here's a list of what our visitors are
            betting on right now.
          </p>
        </div>

        <div id='sports'>
          <ul id='list'>
            <Print_Person/>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sport_list;
