import React, { useState, useEffect } from "react";
import Channelcards from "./channelCards";
import Header from "./header";
import Schedule from "./schedule";

function Homepage() {
  const [channels, setChannels] = useState([]);
  const [liveProgrammes, setLiveProgrammes] = useState([]);

  useEffect(() => {
    fetchChannles();
    fetchLiveProgrammes();
  }, []);

  const fetchChannles = () => {
    fetch("https://rest-api.elisaviihde.fi/rest/epg/channels")
      .then(response => response.json())
      .then(data => {
        setChannels(data.channels);
        console.log(data.channels);
      });
  };

  const fetchLiveProgrammes = () => {
    fetch("https://rest-api.elisaviihde.fi/rest/epg/schedule/live")
      .then(response => response.json())
      .then(data => {
        setLiveProgrammes(data.schedule);
        console.log(data.schedule);
      });
  };

  return (
    <div>
      <Header channels={channels} />
      {/*<Channelcards channels={channels} changeChannel={setChannels} />*/}
      <Schedule channels={channels} liveProgrammes={liveProgrammes} />
    </div>
  );
}

export default Homepage;
