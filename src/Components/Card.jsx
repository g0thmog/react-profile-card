import React, { useState } from "react";
import "./Card.css";

function Card() {
  const [name, setName] = useState("GOTHMOG");
  const [title, setTitle] = useState("Lieutenant of Morgul");
  const [about, setAbout] = useState(
    "Gothmog is the lieutenant of the Witch-king in the Third Age from Minas Morgul, notably serving at the Battle of the Pelennor Fields."
  );

  return (
    <div className="Card">
      <div className="top-container">
        <div className="image-container">
          <img
            src="https://i.pinimg.com/originals/8f/7d/91/8f7d913dc3209914d937facd2b226a43.jpg"
            alt="gothmog"
            width="150px"
            height="150px"
          ></img>
        </div>
      </div>
      <div className="bottom-container">
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>{about}</p>
        <a href="#">
          <i className="fa fa-facebook fa-lg" />
        </a>
        <a href="#">
          <i className="fa fa-twitter fa-lg" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin fa-lg" />
        </a>
        <a href="#">
          <i class="fa fa-angellist fa-lg"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
