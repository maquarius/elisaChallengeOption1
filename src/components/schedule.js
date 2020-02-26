import React, { useState, useEffect } from "react";

function Schedule(props) {
  const [futureProgrammes, setFutureProgrammes] = useState([]);
  const [request, setRequest] = useState({
    date: "",
    channelId: 37
  });

  useEffect(() => {
    setTodayDate();
  }, []);

  const setTodayDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = ("0" + (today.getMonth() + 1)).slice(-2);
    let yyyy = today.getFullYear();
    let date = yyyy + "-" + mm + "-" + dd;
    setRequest({ ...request, date: date });
    fetchSchedule();
  };

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
      });
  };

  const handleChange = event => {
    event.preventDefault();
    setRequest({ ...request, [event.target.name]: event.target.value });
  };

  const getChannelName = () => {
    for (let i = 0; props.channels.length > i; i++) {
      if (props.channels[i].id === request.channelId) {
        return props.channels[i].name;
      }
    }
  };

  return (
    <div className="scheduleContainer">
      <h3>
        Welcome to the schedule checker. Select a future or past date and a
        channel to checl their schedule
      </h3>
      <div>
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
          Search
        </button>
      </div>
      <div>
        <h2>
          The programme schedule for {getChannelName()} on {request.date}
        </h2>
        <div className="programmesContainer">
          {futureProgrammes.programs ? (
            futureProgrammes.programs.map((item, key) => (
              <div key={key} className="liveProgrammeContainer">
                <p>
                  From: {item.startTime.substring(11)} Untill:{" "}
                  {item.endTime.substring(11)}{" "}
                </p>
                <div className="liveProgrammeTop"></div>
                <p className="channelDescription">{item.name}</p>
                <img
                  src={item.thumbnails[1].url}
                  alt={"thumbnail of" + item.name}
                  width="400"
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
