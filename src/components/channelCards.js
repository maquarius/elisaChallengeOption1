import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";

function programCards(props) {
  return (
    <div className="channelsContainer">
      {props.data.map((item, key) => (
        <div key={key} className="channelItem">
          <div className="channelTop">
            <h1>{item.name}</h1>
            <button className="iconButton">
              <FontAwesomeIcon icon={faStar} />
            </button>
          </div>
          <img src={item.logos[7].url} alt="logo of " {...item.name}></img>
          <p className="channelDescription">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default programCards;
