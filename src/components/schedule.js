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
        setFutureProgrammes(data.schedule);
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

  const logCurrentChannels = event => {
    console.log(url);
  };

  return (
    <div className="scheduleContainer">
      <form>
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
        <input type="hidden" name="answer" id="answerInput-hidden"></input>
        <input
          type="submit"
          value="find schedule"
          onClick={() => fetchSchedule()}
        ></input>
      </form>

      <button onClick={() => logCurrentId()}>Current id</button>

      <button onClick={() => logCurrentChannels()}>current channels</button>

      <div>
        {futureProgrammes.length ? (
          futureProgrammes.programs.map((item, key) => (
            <div key={key} className="liveProgrammeContainer">
              <div className="liveProgrammeTop"></div>
              <p className="channelDescription">{item.programs.id}</p>
            </div>
          ))
        ) : (
          <p>Nothin</p>
        )}
      </div>
    </div>
  );
}

export default Schedule;
