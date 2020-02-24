import React, { useState } from "react";

function Schedule(props) {
  const [futureProgrammes, setFutureProgrammes] = useState([]);
  const [request, setRequest] = useState({
    date: "",
    channelId: ""
  });

  const url =
    "https://rest-api.elisaviihde.fi/rest/epg/schedule?channelId=" +
    request.channelId +
    "&date=" +
    request.date;

  const fetchSchedule = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setFutureProgrammes(data.schedule[0]);
        console.log(futureProgrammes);
      });
  };

  const handleChange = event => {
    event.preventDefault();
    setRequest({ ...request, [event.target.name]: event.target.value });
  };

  const logCurrentId = event => {
    console.log(props.channels);
  };

  const logCurrentRequest = event => {
    console.log(url);
  };

  return (
    <div className="scheduleContainer">
      <label htmlFor="requestedDate">Select a date:</label>
      <input
        type="date"
        id="requestedDate"
        name="date"
        value={request.date}
        onChange={e => handleChange(e)}
      ></input>

      <label htmlFor="requestedChannel">Select a channel:</label>
      <select
        id="requestedChannel"
        value={request.channelId}
        name="channelId"
        onChange={e => handleChange(e)}
      >
        {props.channels.map((item, key) => (
          <option key={key} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <button value="find schedule" onClick={() => fetchSchedule()}>
        load
      </button>

      <button onClick={() => logCurrentId()}>Current id</button>

      <button onClick={() => logCurrentRequest()}>Log request url</button>

      <div>
        <h2>
          The programme schedule for {request.channelId} on {request.date}
        </h2>
        <div className="programmesContainer">
          {futureProgrammes.programs ? (
            futureProgrammes.programs.map((item, key) => (
              <div key={key} className="liveProgrammeContainer">
                <p>
                  From: {item.startTime} Till: {item.endTime}{" "}
                </p>
                <div className="liveProgrammeTop"></div>
                <p className="channelDescription">{item.name}</p>
                <img
                  src={item.thumbnails[0].url}
                  alt={"thumbnail of" + item.name}
                ></img>
                <p>{item.shortDescription}</p>
              </div>
            ))
          ) : (
            <p>Nothin</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
