import React, { useState, useEffect } from "react";
import { getByTitle } from "@testing-library/react";

function Homepage(props) {
  const getImg = item => {
    if (item.programs.length > 0) {
      for (let i = 0; props.channels.lenght > i; i++) {
        if (props.channels[i].id === item.channel.id) {
          return (
            <img
              src={props.channels[i].logos[0].url}
              alt={props.channels[i].name}
            ></img>
          );
        } else {
          return <p>No imahe available</p>;
        }
      }
    } else {
      return <p>No programme available</p>;
    }
  };

  const getTitle = item => {
    if (item.programs.length > 0) {
      return item.programs[0].name;
    } else {
      return <p>No Porgramme available</p>;
    }
  };
  const getChannel = item => {
    if (item.programs.length > 0) {
      return item.programs[0].channel.name;
    } else {
      return <p>No Porgramme available</p>;
    }
  };

  const getCurrentChannels = () => {
    for (let i = 0; props.liveProgrammes.length > i; i++) {
      if (typeof props.liveProgrammes.programs !== "undefined") {
        if (props.liveProgrammes.channel.scrambled === false) {
          return (
            <div>
              <p>{props.liveProgrammes.channel.name}</p>
            </div>
          );
        } else {
          return <p>This doesnt work</p>;
        }
      } else {
        return <p>This doesnt work</p>;
      }
    }
  };

  return (
    <div>
      <h1>Elisa offers the following channels for free:</h1>

      <div>{getCurrentChannels()}</div>

      <h1>
        Over {props.liveProgrammes.length} different programmes available!
      </h1>

      <div className="liveContainer">
        {props.liveProgrammes.map((item, key) => (
          <div className="liveChannelContainer" key={key}>
            {" "}
            <div className="channelName">{getChannel(item)}</div>
            <div>{getImg(item)}</div>
            <div className="programName">{getTitle(item)}</div>
            <p>{key}</p>
          </div>
        ))}
        {/*<Channelcards channels={channels} changeChannel={setChannels} />*/}
      </div>
    </div>
  );
}

export default Homepage;
