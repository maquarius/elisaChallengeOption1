import React from "react";

function Schedule(props) {
  return (
    <div className="scheduleContainer">
      {props.liveProgrammes.map((item, key) => (
        <div key={key} className="liveProgrammContainer">
          <div className="liveProgrammeTop"></div>
          <p className="channelDescription">{item.channel.id}</p>
          <p className="channelDescription">{item.programs[0].name}</p>
          <p className="channelDescription">{item.programs.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Schedule;
